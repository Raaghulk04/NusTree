import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState, useCallback, useRef } from "react";
import isPrecluded from "@/graph/isPreclusion";
import {
  computeNodePositions,
  extractMods,
  getDirectDependents,
  getModuleNeighborhood,
} from "./layoutUtils";
import Sidebar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";
import MissingMods from "./missingmods";
import "@/app/globals.css";
import { getPlannerModuleId } from "@/graph/plannerModuleIds";
import {
  getUserAddModules,
  upsertUserAddModule,
} from "../server/planner.service";
import { authClient } from "@/lib/auth-client";

const NODE_COLORS = {
  completed: "#86efac",
  taken: "#93c5fd",
  default: "#e5e7eb",
  selectedBorder: "#f59e0b",
  connectedBorder: "#3b82f6",
  completedBorder: "#22c55e",
  defaultBorder: "#d1d5db",
};
const EDGE_COLORS = {
  and: "#3b82f6",
  or: "#8b5cf6",
};

// 2. Extracted pure, stationary styling utilities
const getNodeBackground = (code) => {
  if (code === 2) return NODE_COLORS.completed; // Completed
  if (code === 1) return NODE_COLORS.taken; // Taken
  return NODE_COLORS.default; // Default / Compulsory
};

const getNodeBorder = (code) => {
  if (code === 2) return `2px solid ${NODE_COLORS.completedBorder}`;
  if (code === 1) return `2px solid ${NODE_COLORS.connectedBorder}`;
  return `1px solid ${NODE_COLORS.defaultBorder}`;
};

// Static registration of custom node components outside the component block
const nodeTypes = {
  moduleNodeType: ModuleNode,
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

export default function Simple({
  mods,
  completedMods,
  compulsoryMods,
  takenMods,
  allMods,
  isSideBarOpen,
  setIsSideBarOpen,
  prereqMap,
}) {
  const { fitView, setCenter, getNode, getZoom } = useReactFlow();
  const [baseNodes, setBaseNodes] = useState([]); // raw nodes from async work
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedView, setSelectedView] = useState("focus");
  const [showEligible, setShowEligible] = useState(false);
  const [localCompletedModIds, setLocalCompletedModIds] = useState([]);
  const [positions, setPositions] = useState({});
  const [measuredGhostState, setMeasuredGhostState] = useState({
    selectedNode: null,
    ids: new Set(),
  });
  const [eligibleMods, setEligibleMods] = useState([]);
  const [plannerMods, setPlannerMods] = useState([]);

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session?.user?.id) {
      const userId = session.user.id;
      getUserAddModules(userId).then(setPlannerMods);
    }
  }, [session]);

  console.log("plannerMods", plannerMods);

  const handleNewAddModule = useCallback(
    async (moduleId) => {
      if (session?.user?.id) {
        const userId = session.user.id;
        const savedModule = await upsertUserAddModule({
          userId: userId,
          moduleId: moduleId,
          planYear: 1,
          planSemester: 1,
        });

        setPlannerMods((prev) => {
          const existingIndex = prev.findIndex(
            (mod) => mod.moduleId === savedModule.moduleId,
          );

          if (existingIndex === -1) {
            return [...prev, savedModule];
          }

          const next = [...prev];
          next[existingIndex] = savedModule;
          return next;
        });
      }
    },
    [session],
  );

  const modMap = useMemo(() => new Map(mods.map((m) => [m.id, m])), [mods]);
  const modIds = useMemo(() => new Set(mods.map((m) => m.id)), [mods]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const data = JSON.parse(
        event.dataTransfer.getData("application/reactflow"),
      );

      // check if the dropped element is valid
      if (!data.id) {
        return;
      }

      const mod = modMap.get(data.id);
      console.log("mod", mod);
      //setPlannerMods((nds) => nds.concat(mod));
      void handleNewAddModule(data.id);
      // details: https://reactflow.dev/whats-new/2023-11-10
      // const position = {
      //   x: 0,
      //   y: 0,
      // };
      // const newNode = {
      //   id: data.id,
      //   type: "moduleNodeType",
      //   position,
      //   data: { label: data.id },
      // };

      // setBaseNodes((nds) => nds.concat(newNode));
    },
    [modMap, handleNewAddModule],
  );

  const highlightNode = useCallback((nodeId) => {
    const nodeElement = document.querySelector(`[data-id="${nodeId}"]`);

    if (nodeElement) {
      nodeElement.classList.add("node-flash-highlight");

      // 3. Remove it after 2 seconds
      setTimeout(() => {
        nodeElement.classList.remove("node-flash-highlight");
      }, 2000);
    }
  }, []);

  const centerNode = useCallback(
    (moduleId) => {
      const node = getNode(moduleId);
      const x = getZoom();
      if (!node) {
        return;
      }
      setCenter(node.position.x, node.position.y, { zoom: x });
      highlightNode(moduleId);
    },
    [getNode, setCenter, getZoom, highlightNode],
  );

  const completedIds = useMemo(
    () => [
      ...new Set([
        ...(completedMods || []).map((mod) => mod.moduleId),
        ...localCompletedModIds,
      ]),
    ],
    [completedMods, localCompletedModIds],
  );

  const measureGhostIds = useMemo(
    () =>
      measuredGhostState.selectedNode === selectedNode
        ? measuredGhostState.ids
        : new Set(),
    [measuredGhostState, selectedNode],
  );

  const handleModuleCompleted = useCallback((moduleId) => {
    setLocalCompletedModIds((prev) =>
      prev.includes(moduleId) ? prev : [...prev, moduleId],
    );
  }, []);

  const selectedMissingPrereqs = useMemo(() => {
    if (!selectedNode) return [];
    return MissingMods(prereqMap.get(selectedNode), completedIds) ?? [];
  }, [selectedNode, prereqMap, completedIds]);

  const focusIds = useMemo(
    () =>
      selectedNode
        ? getModuleNeighborhood(selectedNode, mods, selectedMissingPrereqs)
        : new Set(),
    [selectedNode, mods, selectedMissingPrereqs],
  );

  const focusPositions = useMemo(() => {
    if (!selectedNode || selectedView !== "focus") return {};

    const layoutMods = [...focusIds]
      .map((id) => modMap.get(id))
      .filter(Boolean);

    return computeNodePositions(layoutMods, { anchorId: selectedNode });
  }, [selectedNode, selectedView, focusIds, modMap]);

  const activePositions =
    selectedNode && selectedView === "focus" ? focusPositions : positions;

  const ghostNodes = useMemo(() => {
    if (!selectedNode) return [];

    const inGraphNodes = new Set(baseNodes.map((m) => m.id));

    const selectedBaseNode = baseNodes.find((n) => n.id === selectedNode);
    const selectedPos = activePositions[selectedNode] ??
      selectedBaseNode?.position ?? { x: 0, y: 0 };

    const baseX = Number.isFinite(selectedPos.x) ? selectedPos.x : 0;
    const baseY = Number.isFinite(selectedPos.y) ? selectedPos.y : 0;

    const ghostNodes = [];

    selectedMissingPrereqs.forEach((prereq, index) => {
      if (inGraphNodes.has(prereq)) return;
      const modObj = modMap.get(prereq);
      if (!modObj) return;
      const layoutPosition = activePositions[prereq];

      ghostNodes.push({
        id: prereq,
        type: "moduleNodeType",
        position: layoutPosition ?? { x: baseX + index * 160, y: baseY - 120 },
        data: {
          label: prereq,
          title: modObj.title,
          description: modObj.description,
          isGhost: true, // flag for styling
        },
        style: {
          color: "#000000",
          backgroundColor: "#fef08a", // yellow — "you still need this"
          borderRadius: "8px",
          fontSize: "11px",
          border: "2px dashed #ca8a04",
          opacity: 0.85,
          cursor: "pointer",
        },
      });
    });

    return ghostNodes;
  }, [
    selectedNode,
    baseNodes,
    selectedMissingPrereqs,
    modMap,
    activePositions,
  ]);

  // ONLY re-runs when actual data changes, not on selection
  useEffect(() => {
    async function calculateNodes() {
      const completedIdPayload = completedIds.map((id) => ({
        code: 2,
        id,
      }));
      const compulsoryIds = (compulsoryMods || []).map((m) => ({
        code: 0,
        id: m,
      }));
      const takenIds = (takenMods || []).map((m) => ({ code: 1, id: m.id }));
      const takenIdSet = new Set(takenIds.map((m) => m.id));

      const plannedIds = (plannerMods || []).map((m) => ({
        code: 1,
        id: m.moduleId,
      }));

      console.log("plannedIds", plannedIds);

      let final = await isPrecluded({
        completedIds: completedIdPayload,
        takenIds,
        compulsoryIds,
      });
      final = final.concat(plannedIds);

      const uniques = new Map();
      for (const node of final) {
        if (!uniques.has(node.id)) uniques.set(node.id, node);
      }
      const finalNodes = [...uniques.values()];

      const availableNodes = showEligible
        ? finalNodes
        : finalNodes.filter((n) => !(takenIdSet.has(n.id) && n.code === 1));

      const eligibles = finalNodes
        .filter((n) => takenIdSet.has(n.id) && n.code === 1)
        .map((obj) => obj.id);
      setEligibleMods(eligibles);

      const nodeForPositions = availableNodes
        .map((n) => modMap.get(n.id))
        .filter(Boolean);

      const computedPositions = computeNodePositions(nodeForPositions);
      setPositions(computedPositions);

      const flowNodes = availableNodes.map((mod) => {
        const modObj = modMap.get(mod.id); // O(1) instead of filter()
        return {
          id: mod.id,
          type: "moduleNodeType",
          position: {
            x: computedPositions[mod.id]?.x ?? 0,
            y: computedPositions[mod.id]?.y ?? 0,
          },
          data: {
            label: mod.id,
            title: modObj?.title,
            description: modObj?.description,
            onCompleted: (moduleId) => handleModuleCompleted(moduleId),
            code: mod.code, // store code so useMemo can use it for styling
          },
        };
      });

      setBaseNodes(flowNodes);
    }
    calculateNodes();
  }, [
    completedIds,
    compulsoryMods,
    takenMods,
    showEligible,
    modMap,
    handleModuleCompleted,
    plannerMods,
  ]);

  const inGraph = useMemo(
    () =>
      new Set(
        baseNodes.map((mod) => mod.id),
        [baseNodes],
      ),
  );

  console.log("inGraph", inGraph);
  // Selection styling is pure derivation — no async, no rebuild
  const { nodes, edges } = useMemo(() => {
    // Determine if we are in focus mode
    const isFocus = selectedNode && selectedView === "focus";
    // filter baseNodes depending on whether we are in focus mode or not
    const visibleBaseNodes = isFocus
      ? baseNodes.filter((node) => focusIds.has(node.id))
      : baseNodes;

    console.log("ingraph", inGraph);

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
    console.log("oneDepthNodes", oneDepthNodes);
    const styled = visibleBaseNodes.map((node) => {
      const isSelected = node.id === selectedNode;
      const isRelated = selectedNode && focusIds.has(node.id);
      const isOneDepth = oneDepthNodes.has(node.id);
      const brightness = !selectedNode
        ? 1
        : isFocus
          ? isRelated
            ? 1
            : 0.35
          : isOneDepth || isSelected
            ? 1
            : 0.35;
      return {
        ...node,
        position: activePositions[node.id] ?? node.position,
        style: {
          color: "#000000",
          backgroundColor: getNodeBackground(node.data.code),
          borderRadius: "8px",
          fontSize: "11px",
          border: isSelected
            ? `2px solid ${NODE_COLORS.selectedBorder}`
            : getNodeBorder(node.data.code),
          opacity: brightness,
          cursor: "pointer",
        },
      };
    });

    if (!selectedNode) {
      return { nodes: [...styled, ...ghostNodes], edges: [] };
    }

    const resultEdges = [];
    const edgeSet = new Set();
    const junctionNodes = [];

    mods.forEach((mod) => {
      if (!mod.prereqTree) return;
      const prereqs = [...new Set(extractMods(mod.prereqTree))];
      const isSelected = mod.id === selectedNode;
      const isPrereqOfSelected = prereqs.includes(selectedNode);
      if (!isSelected && !isPrereqOfSelected) return;

      if (isSelected) {
        buildTree(
          mod.prereqTree,
          mod.id,
          inGraph,
          resultEdges,
          edgeSet,
          "and",
          junctionNodes,
          activePositions,
        );
      } else {
        const edgeType = findEdgeType(mod.prereqTree, selectedNode) || "and";
        const edgeId = `${selectedNode}-${mod.id}`;
        if (!edgeSet.has(edgeId)) {
          edgeSet.add(edgeId);
          resultEdges.push(
            createDirectDependencyEdge(selectedNode, mod.id, edgeType),
          );
        }
      }
    });

    // Post-process edges to handle ghost node visibility
    const processedEdges = resultEdges.map((edge) => {
      const isGhostSource = ghostNodes.some((gn) => gn.id === edge.source);
      if (isGhostSource) {
        return {
          ...edge,
          style: {
            ...edge.style,
            stroke: "#d10000",
            strokeDasharray: "5,5",
            opacity: measureGhostIds.has(edge.source) ? 1 : 0,
          },
          label: "MISSING",
          labelStyle: {
            ...edge.labelStyle,
            opacity: measureGhostIds.has(edge.source) ? 1 : 0,
          },
        };
      }
      return edge;
    });

    return {
      nodes: [...styled, ...ghostNodes, ...junctionNodes],
      edges: processedEdges,
    };
  }, [
    baseNodes,
    selectedNode,
    selectedView,
    focusIds,
    ghostNodes,
    mods,
    activePositions,
    measureGhostIds,
    modMap,
    inGraph,
  ]);

  const handleNodeClick = useCallback((_, node) => {
    setSelectedNode((prev) => {
      if (prev === node.id) return null;
      setSelectedView("full");
      return node.id;
    });
  }, []);

  useEffect(() => {
    if (nodes.length === 0) return undefined;

    const frameId = requestAnimationFrame(() => {
      fitView({
        duration: 300,
        padding: selectedView === "focus" ? 0.3 : 0.15,
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [fitView, nodes.length, selectedNode, selectedView, showEligible]);

  const onNodesChange = useCallback(
    (changes) => {
      const baseNodeIds = new Set(baseNodes.map((n) => n.id));
      const ghostIds = new Set(ghostNodes.map((n) => n.id));

      // 1. Handle baseNodes changes
      const baseChanges = changes.filter((c) => baseNodeIds.has(c.id));
      if (baseChanges.length > 0) {
        setBaseNodes((nds) => applyNodeChanges(baseChanges, nds));
      }

      // 2. Handle ghost measurement tracking
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
    [baseNodes, ghostNodes, selectedNode],
  );

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
          nodes={nodes}
          edges={edges}
          colorMode="dark"
          onNodeClick={handleNodeClick}
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
              <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-1 shadow-lg">
                <button
                  type="button"
                  onClick={() => setSelectedView("focus")}
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
                  onClick={() => setSelectedView("full")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                    selectedView === "full"
                      ? "bg-blue-500 text-white"
                      : "text-zinc-200 hover:bg-zinc-800"
                  }`}
                >
                  Full Simple
                </button>
              </div>
            )}
            <button
              onClick={() => {
                // if a node is selected and we are show eligible mod mode, unselect the node
                // if its a eligible
                console.log(eligibleMods);
                console.log(selectedNode);
                if (showEligible && eligibleMods.includes(selectedNode)) {
                  setSelectedNode(null);
                }
                setShowEligible(!showEligible);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all border ${
                showEligible
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-400"
                  : "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-zinc-700"
              }`}
            >
              {showEligible ? "Hide Eligible Mods" : "Show Eligible Mods"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
