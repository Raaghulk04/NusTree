import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState, useCallback } from "react";
import isPrecluded from "@/graph/isPreclusion";
import { computeNodePositions, extractMods } from "./layoutUtils";
import Sidebar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";

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
}) {
  const [baseNodes, setBaseNodes] = useState([]); // raw nodes from async work
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showEligible, setShowEligible] = useState(false);
  const [localCompletedMods, setLocalCompletedMods] = useState(completedMods);

  useEffect(() => {
    setLocalCompletedMods(completedMods);
  }, [completedMods]);

  const handleModuleCompleted = useCallback((moduleId) => {
    setLocalCompletedMods((prev) => [...prev, { moduleId }]);
  }, []);

  const modMap = useMemo(() => new Map(mods.map((m) => [m.id, m])), [mods]);
  const modIds = useMemo(() => new Set(mods.map((m) => m.id)), [mods]);

  // ONLY re-runs when actual data changes, not on selection
  useEffect(() => {
    async function calculateNodes() {
      setIsLoading(true);
      const completedIds = localCompletedMods.map((m) => ({
        code: 2,
        id: m.moduleId,
      }));
      const compulsoryIds = (compulsoryMods || []).map((m) => ({
        code: 0,
        id: m,
      }));
      const takenIds = (takenMods || []).map((m) => ({ code: 1, id: m.id }));
      const takenIdSet = new Set(takenIds.map((m) => m.id));

      const final = await isPrecluded({
        completedIds,
        takenIds,
        compulsoryIds,
      });

      const uniques = new Map();
      for (const node of final) {
        if (!uniques.has(node.id)) uniques.set(node.id, node);
      }
      const finalNodes = [...uniques.values()];

      const nodeForPositions = finalNodes
        .map((n) => modMap.get(n.id))
        .filter(Boolean);
      const positions = computeNodePositions(nodeForPositions);

      let availableNodes = showEligible
        ? finalNodes
        : finalNodes.filter((n) => !(takenIdSet.has(n.id) && n.code === 1));

      const flowNodes = availableNodes.map((mod) => {
        const modObj = modMap.get(mod.id); // O(1) instead of filter()
        return {
          id: mod.id,
          type: "moduleNodeType",
          position: {
            x: positions[mod.id]?.x ?? 0,
            y: positions[mod.id]?.y ?? 0,
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
      setIsLoading(false);
    }
    calculateNodes();
  }, [
    localCompletedMods,
    compulsoryMods,
    takenMods,
    showEligible,
    modMap,
    handleModuleCompleted,
  ]);

  // Selection styling is pure derivation — no async, no rebuild
  const nodes = useMemo(() => {
    return baseNodes.map((node) => ({
      ...node,
      style: {
        color: "#000000",
        backgroundColor: getNodeBackground(node.data.code),
        borderRadius: "8px",
        fontSize: "11px",
        border: getNodeBorder(node.data.code),
        opacity: selectedNode && node.id !== selectedNode ? 0.4 : 1,
        cursor: "pointer",
      },
    }));
  }, [baseNodes, selectedNode]); // selectedNode changes → only this runs, not the useEffect

  const edges = useMemo(() => {
    if (!selectedNode) return [];
    const result = [];
    const edgeSet = new Set();

    mods.forEach((module) => {
      if (!module.prereqTree) return;
      const prereqs = [...new Set(extractMods(module.prereqTree))];
      const isSelected = module.id === selectedNode;
      const isPrereqOfSelected = prereqs.includes(selectedNode);
      if (!isSelected && !isPrereqOfSelected) return;

      if (isSelected) {
        buildTree(module.prereqTree, module.id, modIds, result, edgeSet);
      } else {
        const edgeType = findEdgeType(module.prereqTree, selectedNode) || "and";
        const edgeId = `${selectedNode}-${module.id}`;
        if (!edgeSet.has(edgeId)) {
          edgeSet.add(edgeId);
          result.push(
            createDirectDependencyEdge(selectedNode, module.id, edgeType),
          );
        }
      }
    });
    return result;
  }, [selectedNode, modIds, mods]); // removed nodes dependency

  const handleNodeClick = useCallback((_, node) => {
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  }, []);

  return (
    <div className="flex flex-row h-full w-full overflow-hidden">
      <Sidebar
        isOpen={isSideBarOpen}
        setIsOpen={setIsSideBarOpen}
        mods={allMods}
      />
      <div className="flex-1 relative h-full">
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          colorMode="dark"
          onNodeClick={handleNodeClick}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
        <div className="absolute bottom-6 right-6 z-50">
          <button
            onClick={() => setShowEligible(!showEligible)}
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
  );
}
