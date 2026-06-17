import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState, useCallback } from "react";
import isPrecluded from "@/graph/isPreclusion";
import { computeNodePositions, extractMods } from "./layoutUtils";
import Sidebar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";
import MissingMods from "./missingmods";

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
  const [baseNodes, setBaseNodes] = useState([]); // raw nodes from async work
  const [selectedNode, setSelectedNode] = useState(null);
  const [showEligible, setShowEligible] = useState(false);
  const [localCompletedMods, setLocalCompletedMods] = useState(completedMods);
  const [positions, setPositions] = useState({});
  const [measureGhostIds, setMeasuredGhostIds] = useState(new Set());

  const completedIds = useMemo(
    () => localCompletedMods.map((mod) => mod.moduleId),
    [localCompletedMods],
  );

  useEffect(() => {
    setMeasuredGhostIds(new Set());
  }, [selectedNode]);

  useEffect(() => {
    setLocalCompletedMods(completedMods);
  }, [completedMods]);

  const handleModuleCompleted = useCallback((moduleId) => {
    setLocalCompletedMods((prev) => [...prev, { moduleId }]);
  }, []);

  const modMap = useMemo(() => new Map(mods.map((m) => [m.id, m])), [mods]);
  const modIds = useMemo(() => new Set(mods.map((m) => m.id)), [mods]);

  const ghostNodes = useMemo(() => {
    if (!selectedNode) return [];

    const allPrereqs =
      MissingMods(prereqMap.get(selectedNode), completedIds) ?? [];
    const inGraphNodes = new Set(baseNodes.map((m) => m.id));

    // Find the CURRENT position of the selected node in baseNodes
    const selectedBaseNode = baseNodes.find((n) => n.id === selectedNode);
    const selectedPos = selectedBaseNode?.position ??
      positions[selectedNode] ?? { x: 0, y: 0 };

    const baseX = Number.isFinite(selectedPos.x) ? selectedPos.x : 0;
    const baseY = Number.isFinite(selectedPos.y) ? selectedPos.y : 0;

    const ghostNodes = [];

    allPrereqs.forEach((prereq, index) => {
      if (inGraphNodes.has(prereq)) return;
      const modObj = modMap.get(prereq);
      if (!modObj) return;

      ghostNodes.push({
        id: prereq,
        type: "moduleNodeType",
        position: { x: baseX + index * 160, y: baseY - 120 },
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
  }, [selectedNode, baseNodes, prereqMap, modMap, positions]);

  // ONLY re-runs when actual data changes, not on selection
  useEffect(() => {
    async function calculateNodes() {
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

      const computedPositions = computeNodePositions(nodeForPositions);
      setPositions(computedPositions);

      let availableNodes = showEligible
        ? finalNodes
        : finalNodes.filter((n) => !(takenIdSet.has(n.id) && n.code === 1));

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
    localCompletedMods,
    compulsoryMods,
    takenMods,
    showEligible,
    modMap,
    handleModuleCompleted,
  ]);

  // Selection styling is pure derivation — no async, no rebuild
  const { nodes, edges } = useMemo(() => {
    const styled = baseNodes.map((node) => ({
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
          modIds,
          resultEdges,
          edgeSet,
          "and",
          junctionNodes,
          positions,
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
    ghostNodes,
    mods,
    modIds,
    positions,
    measureGhostIds,
  ]);

  const handleNodeClick = useCallback((_, node) => {
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  }, []);

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
        setMeasuredGhostIds((prev) => {
          const next = new Set(prev);
          ghostDimensionChanges.forEach((c) => next.add(c.id));
          return next;
        });
      }
    },
    [baseNodes, ghostNodes],
  );

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
          onNodesChange={onNodesChange}
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
