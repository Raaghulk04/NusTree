import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState, useCallback } from "react";
import {
  computeNodePositions,
  extractMods,
  getDirectDependents,
} from "./layoutUtils";
import Sidebar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";
import { useFocusMode } from "./focus";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";
import {
  getModuleNodeBackground,
  getModuleNodeBorder,
  SELECTED_MODULE_BORDER_COLOR,
} from "@/graph/moduleStatus";
import {
  isSatisfied,
  getDeepPrereqIds,
} from "@/graph/focus";

const EDGE_COLORS = {
  and: "#3b82f6",
  or: "#8b5cf6",
};

const createDirectDependencyEdge = (source, target, edgeType) => {
  const color = edgeType === "or" ? EDGE_COLORS.or : EDGE_COLORS.and;

  return {
    id: `${source}-${target}`,
    source,
    target,
    label: edgeType === "or" ? "OR" : "AND",
    style: {
      stroke: color,
      strokeWidth: 2,
    },
    labelStyle: {
      fontSize: "10px",
      fill: color,
    },
  };
};

const nodeTypes = {
  moduleNodeType: ModuleNode,
};

export default function FocusView({
  mods,
  allMods,
  isSideBarOpen,
  setIsSideBarOpen,
  prereqMap,
  modMap,
  completedIds,
  selectedNode,
  setSelectedNode,
  selectedView,
  setSelectedView,
  baseNodes,
  setBaseNodes,
  centerNode,
  onDrop,
  onDragOver,
}) {
  const { fitView } = useReactFlow();
  const [customPositions, setCustomPositions] = useState({});
  const [measuredGhostState, setMeasuredGhostState] = useState({
    selectedNode: null,
    ids: new Set(),
  });
  const [clickedNode, setClickedNode] = useState(selectedNode);

  useEffect(() => {
    setClickedNode(selectedNode);
  }, [selectedNode]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        setSelectedView("full");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSelectedView]);
  

  const {
    deepPrereqs,
    focusIds,
    focusPositions,
  } = useFocusMode({
    selectedNode,
    selectedView,
    prereqMap,
    completedIds,
    mods,
    modMap,
  });

  const completedIdSet = new Set(completedIds); 

  const activePositions = useMemo(() => {
    return {
      ...focusPositions,
      ...customPositions,
    };
  }, [focusPositions, customPositions]);

  const inGraph = useMemo(
    () => new Set(baseNodes.map((mod) => mod.id)),
    [baseNodes],
  );

  const ghostNodes = useMemo(() => {
    if (!selectedNode) return [];

    const selectedBaseNode = baseNodes.find((n) => n.id === selectedNode);
    const selectedPos = activePositions[selectedNode] ??
      selectedBaseNode?.position ?? { x: 0, y: 0 };

    const baseX = Number.isFinite(selectedPos.x) ? selectedPos.x : 0;
    const baseY = Number.isFinite(selectedPos.y) ? selectedPos.y : 0;

    const ghostNodeIds = [...deepPrereqs].filter((id) => !inGraph.has(id));

    return ghostNodeIds.map((prereq, index) => {
      const modObj = modMap.get(prereq);
      const layoutPosition = activePositions[prereq];
      return {
        id: prereq,
        type: "moduleNodeType",
        position: layoutPosition ?? { x: baseX + index * 160, y: baseY - 120 },
        data: {
          label: prereq,
          title: modObj?.title || "Unknown Title",
          description: modObj?.description || "",
          isGhost: true,
          state: 3, // Missing prerequisite warning state
        },
        style: {
          color: "#000000",
          backgroundColor: "#fef08a",
          borderRadius: "8px",
          fontSize: "11px",
          border: "2px dashed #ca8a04",
          opacity: 0.85,
          cursor: "pointer",
        },
      };
    });
  }, [selectedNode, baseNodes, deepPrereqs, modMap, activePositions, inGraph]);

  const nodes = useMemo(() => {
    const visibleBaseNodes = !selectedNode
      ? baseNodes
      : baseNodes.filter((node) => focusIds.has(node.id));

    const styled = visibleBaseNodes.map((node) => {
      const isSelected = node.id === selectedNode;
      const isRelated = selectedNode && focusIds.has(node.id);
      const brightness = !selectedNode
        ? 1
        : isRelated
          ? 1
          : 0.35;

      const isCompleted = completedIdSet.has(node.id);
      const code = isCompleted ? 2 : node.data.code;

      return {
        ...node,
        position: activePositions[node.id] ?? node.position,
        style: {
          color: "#000000",
          backgroundColor: getModuleNodeBackground(code),
          borderRadius: "8px",
          fontSize: "11px",
          border: isSelected
            ? `2px solid ${SELECTED_MODULE_BORDER_COLOR}`
            : node.id === clickedNode
              ? "2px solid #3b82f6"
              : getModuleNodeBorder(code),
          opacity: brightness,
          cursor: "pointer",
        },
      };
    });

    return [...styled, ...ghostNodes];
  }, [
    baseNodes,
    selectedNode,
    focusIds,
    ghostNodes,
    activePositions,
    completedIdSet,
  ]);

  const nodeIdSet = new Set(nodes.map(n => n.id))
  
  const { clickedEdges, clickedJunctionNodes } = useMemo(() => {
    if (!clickedNode) {
      return { clickedEdges: [], clickedJunctionNodes: [] };
    }

    const resultEdges = [];
    const edgeSet = new Set();
    const junctionNodes = [];
    const completedIdSet = new Set(completedIds);

    mods.forEach((mod) => {
      if (!mod.prereqTree) return;
      const isSelected = mod.id === clickedNode;
      if (!isSelected) return;

      buildTree(
        mod.prereqTree,
        mod.id,
        nodeIdSet,
        resultEdges,
        edgeSet,
        "and",
        junctionNodes,
        activePositions,
      );
    });

    // Call buildTree for all deep prerequisites
    // const res = new Set();
    // const completedIdSetForPrereq = new Set(completedIds);
    // getDeepPrereqIds(clickedNode, prereqMap, res, completedIdSetForPrereq);
    // const deepPrereqsOfHovered = Array.from(res).filter((id) => id !== clickedNode);
    //
    // deepPrereqsOfHovered.forEach((prereqId) => {
    //   const prereqMod = modMap.get(prereqId);
    //   if (prereqMod && prereqMod.prereqTree) {
    //     buildTree(
    //       prereqMod.prereqTree,
    //       prereqId,
    //       completedIdSet,
    //       resultEdges,
    //       edgeSet,
    //       "and",
    //       junctionNodes,
    //       activePositions,
    //     );
    //   }
    // });

    return {
      clickedEdges: resultEdges,
      clickedJunctionNodes: junctionNodes,
    };
  }, [clickedNode, mods, completedIds, activePositions, prereqMap, modMap]);

  const handleNodeClick = useCallback((_, node) => {
    setClickedNode((prev) => (prev === node.id ? null : node.id));
  }, []);

  const onNodesChange = useCallback(
    (changes) => {
      const baseNodeIds = new Set(baseNodes.map((n) => n.id));
      const ghostIds = new Set(ghostNodes.map((n) => n.id));

      const baseChanges = changes.filter((c) => baseNodeIds.has(c.id));
      if (baseChanges.length > 0) {
        setBaseNodes((nds) => applyNodeChanges(baseChanges, nds));
      }

      const positionChanges = changes.filter(
        (c) => c.type === "position" && c.position,
      );
      if (positionChanges.length > 0) {
        setCustomPositions((prev) => {
          const next = { ...prev };
          positionChanges.forEach((c) => {
            next[c.id] = c.position;
          });
          return next;
        });
      }

      const ghostDimensionChanges = changes.filter(
        (c) => c.type === "dimensions" && ghostIds.has(c.id),
      );
      if (ghostDimensionChanges.length > 0) {
        setMeasuredGhostState((prev) => {
          const next = new Set(
            prev.selectedNode === selectedNode ? prev.ids : [],
          );
          ghostDimensionChanges.forEach((c) => next.add(c.id));
          return { selectedNode, ids: next };
        });
      }
    },
    [baseNodes, ghostNodes, selectedNode, setBaseNodes],
  );

  useEffect(() => {
    if (nodes.length === 0) return undefined;

    const frameId = requestAnimationFrame(() => {
      fitView({
        duration: 300,
        padding: 0.3,
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [fitView, nodes.length, selectedNode]);

  return (
    <div className="flex flex-row h-full w-full overflow-hidden">
      <Sidebar
        isOpen={isSideBarOpen}
        setIsOpen={setIsSideBarOpen}
        mods={allMods}
        inGraph={inGraph}
        centerNode={centerNode}
      />
      <div className="flex-1 relative h-full">
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={useMemo(() => [...nodes, ...clickedJunctionNodes], [nodes, clickedJunctionNodes])}
          edges={clickedEdges}
          colorMode="dark"
          onNodeClick={handleNodeClick}
          onPaneClick={() => setClickedNode(null)}
          onNodesChange={onNodesChange}
          fitView
          panOnScroll={true}
          selectionOnDrag={true}
          panOnDrag={false}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <Background />
          <Controls />
        </ReactFlow>
        <div className="absolute bottom-6 right-6 z-50">
          <div className="flex flex-col items-end gap-2">
            {selectedNode && (
              <>
                <div className="rounded-md border border-zinc-700 bg-zinc-900/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-zinc-300 shadow-lg flex items-center gap-1.5 select-none transition-all hover:text-zinc-200">
                  <span className="inline-flex items-center justify-center rounded border border-zinc-600 bg-zinc-800 px-1.5 py-0.5 text-[9px] font-bold text-zinc-100 shadow-[0_1.5px_0_0_rgba(255,255,255,0.15)]">Esc</span>
                  <span>Full Simple Mode</span>
                </div>
                <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-1 shadow-lg">
                  <button
                    type="button"
                    onClick={() => {
                      setCustomPositions({});
                      setSelectedView("focus");
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                      selectedView === "focus"
                        ? "bg-blue-500 text-white"
                        : "text-zinc-200 hover:bg-zinc-800"
                    }`}
                  >
                    Focus
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCustomPositions({});
                      setSelectedView("full");
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                      selectedView === "full"
                        ? "bg-blue-500 text-white"
                        : "text-zinc-200 hover:bg-zinc-800"
                    }`}
                  >
                    Full
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
