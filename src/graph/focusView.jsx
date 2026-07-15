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
  const [hoveredNode, setHoveredNode] = useState(null);
  

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
    const res = new Set();
    const visibleBaseNodes = getDeepPrereqIds(selectedNode, prereqMap, res, completedIdSet) 
    console.log("visibleBaseNodes", res)
    const oneDepthNodes =
      selectedNode === null
        ? new Set()
        : new Set([
            ...extractMods(modMap.get(selectedNode)?.prereqTree).filter((n) =>
              inGraph.has(n),
            ),
            ...getDirectDependents(selectedNode, mods).filter((n) =>
              inGraph.has(n),
            ),
          ]);

    const styled = visibleBaseNodes.map((node) => {
      const isSelected = node.id === selectedNode;
      const isRelated = selectedNode && focusIds.has(node.id);
      const isOneDepth = oneDepthNodes.has(node.id);
      const brightness = !selectedNode
        ? 1
        : isRelated
          ? 1
          : 0.35;

      return {
        ...node,
        position: activePositions[node.id] ?? node.position,
        style: {
          color: "#000000",
          backgroundColor: getModuleNodeBackground(node.data.code),
          borderRadius: "8px",
          fontSize: "11px",
          border: isSelected
            ? `2px solid ${SELECTED_MODULE_BORDER_COLOR}`
            : getModuleNodeBorder(node.data.code),
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
    modMap,
    inGraph,
    mods,
  ]);

  const { hoverEdges, hoverJunctionNodes } = useMemo(() => {
    if (!hoveredNode) {
      return { hoverEdges: [], hoverJunctionNodes: [] };
    }

    const resultEdges = [];
    const edgeSet = new Set();
    const junctionNodes = [];
    const completedIdSet = new Set(completedIds);

    mods.forEach((mod) => {
      if (!mod.prereqTree) return;
      const prereqs = [...new Set(extractMods(mod.prereqTree))];
      const isSelected = mod.id === hoveredNode;
      const isPrereqOfSelected = prereqs.includes(hoveredNode);
      if (!isSelected && !isPrereqOfSelected) return;

      if (isSelected) {
        buildTree(
          mod.prereqTree,
          mod.id,
          completedIdSet,
          resultEdges,
          edgeSet,
          "and",
          junctionNodes,
          activePositions,
        );
      } else {
        const edgeType = findEdgeType(mod.prereqTree, hoveredNode) || "and";
        const edgeId = `${hoveredNode}-${mod.id}`;
        if (!edgeSet.has(edgeId)) {
          edgeSet.add(edgeId);
          const isCompleted = completedIdSet.has(hoveredNode);
          resultEdges.push(
            isCompleted
              ? createDirectDependencyEdge(hoveredNode, mod.id, edgeType)
              : {
                  id: edgeId,
                  source: hoveredNode,
                  target: mod.id,
                  label: edgeType === "or" ? "OR" : "AND",
                  style: {
                    stroke: "#d10000",
                    strokeDasharray: "5,5",
                  },
                  labelStyle: {
                    fontSize: "10px",
                    fill: "#d10000",
                  },
                },
          );
        }
      }
    });

    return {
      hoverEdges: resultEdges,
      hoverJunctionNodes: junctionNodes,
    };
  }, [hoveredNode, mods, completedIds, activePositions]);

  const handleNodeClick = useCallback((_, node) => {
    setCustomPositions({});
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  }, [setSelectedNode]);

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
          nodes={useMemo(() => [...nodes, ...hoverJunctionNodes], [nodes, hoverJunctionNodes])}
          edges={hoverEdges}
          colorMode="dark"
          onNodeClick={handleNodeClick}
          onNodesChange={onNodesChange}
          onNodeMouseEnter={(_, node) => setHoveredNode(node.id)}
          onNodeMouseLeave={() => setHoveredNode(null)}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
