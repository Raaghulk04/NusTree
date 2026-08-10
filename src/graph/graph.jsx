import { ReactFlow, Controls, useReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import ModeToggle from "./modeToggle";
import Simple from "@/graph/simple";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";
import { computeNodePositions, extractMods } from "@/graph/layoutUtils";
import Sidebar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";
import { DEFAULT_TERM, getNextPlannerTerm } from "@/graph/termUtils";

const DEFAULT_NODE_POSITION = { x: 0, y: 0 };
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

const isUndergradLevelModule = (moduleId) => {
  const number = Number(String(moduleId).match(/\d+/)?.[0]);
  return !number || number < 5000;
};

const getNodeBackground = (moduleId, completedIds, takenIds) => {
  if (completedIds.has(moduleId)) return NODE_COLORS.completed;
  if (takenIds.has(moduleId)) return NODE_COLORS.taken;
  return NODE_COLORS.default;
};

const getNodeBorder = ({
  moduleId,
  isSelected,
  isConnected,
  completedIds,
  takenIds,
}) => {
  if (isSelected) return `2px solid ${NODE_COLORS.selectedBorder}`;
  if (isConnected) return `2px solid ${NODE_COLORS.connectedBorder}`;
  if (completedIds.has(moduleId)) {
    return `2px solid ${NODE_COLORS.completedBorder}`;
  }
  if (takenIds.has(moduleId)) {
    return `2px solid ${NODE_COLORS.connectedBorder}`;
  }
  return `1px solid ${NODE_COLORS.defaultBorder}`;
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

export default function Graph({
  mods,
  allMods,
  takenMods,
  completedMods,
  compulsoryMods,
  initialMode = "Simple",
}) {
  const { fitView, setCenter, getNode, getZoom } = useReactFlow();
  const [selectedNode, setSelectedNode] = useState(null);
  const [mode, setMode] = useState(initialMode);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(DEFAULT_TERM);
  const termInitializedRef = useRef(false);

  const nodeType = useMemo(() => ({ moduleNodeType: ModuleNode }), []);

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
      highlightNode(node.id);
    },
    [getNode, setCenter, getZoom, highlightNode],
  );

  const graphAllMods = useMemo(
    () => allMods.filter((mod) => isUndergradLevelModule(mod.id)),
    [allMods],
  );
  const graphTakenMods = useMemo(
    () => (takenMods || []).filter((mod) => isUndergradLevelModule(mod.id)),
    [takenMods],
  );

  const graphCompletedMods = useMemo(
    () =>
      (completedMods || []).filter((mod) =>
        isUndergradLevelModule(mod.moduleId),
      ),
    [completedMods],
  );

  useEffect(() => {
    if (termInitializedRef.current) return;
    termInitializedRef.current = true;
    setSelectedTerm(getNextPlannerTerm(graphCompletedMods));
  }, [graphCompletedMods]);

  const graphCompulsoryMods = useMemo(
    () =>
      (compulsoryMods || []).filter((moduleId) =>
        isUndergradLevelModule(moduleId),
      ),
    [compulsoryMods],
  );

  const allModIds = useMemo(
    () => new Set(graphAllMods.map((m) => m.id)),
    [graphAllMods],
  );

  const takenIds = useMemo(
    () => new Set((graphTakenMods || []).map((m) => m.id)),
    [graphTakenMods],
  );
  const completedIds = useMemo(
    () => new Set((graphCompletedMods || []).map((m) => m.moduleId)),
    [graphCompletedMods],
  );

  const nodePositions = useMemo(
    () => computeNodePositions(graphAllMods),
    [graphAllMods],
  );

  // Computes edges and extraction of junction nodes simultaneously
  const { edges, calculatedJunctionNodes } = useMemo(() => {
    if (!selectedNode) return { edges: [], calculatedJunctionNodes: [] };

    const result = [];
    const edgeIds = new Set();
    const junctionNodes1 = [];

    graphAllMods.forEach((module) => {
      if (!module.prereqTree) return;

      const prereqs = [...new Set(extractMods(module.prereqTree))];
      const isSelected = selectedNode === module.id;
      const isPrereqOfSelected = prereqs.includes(selectedNode);

      if (!isSelected && !isPrereqOfSelected) return;

      if (isSelected) {
        buildTree(
          module.prereqTree,
          module.id,
          allModIds,
          result,
          edgeIds,
          "and",
          junctionNodes1,
          nodePositions,
        );
      } else {
        const edgeType = findEdgeType(module.prereqTree, selectedNode) || "and";
        const edgeId = `${selectedNode}-${module.id}`;

        if (!edgeIds.has(edgeId)) {
          edgeIds.add(edgeId);
          result.push(
            createDirectDependencyEdge(selectedNode, module.id, edgeType),
          );
        }
      }
    });

    return { edges: result, calculatedJunctionNodes: junctionNodes1 };
  }, [selectedNode, graphAllMods, allModIds, nodePositions]); // Added nodePositions dependency

  const nodes = useMemo(() => {
    const base = graphAllMods.map((module) => {
      const isSelected = module.id === selectedNode;
      const isConnected = Boolean(
        selectedNode &&
        extractMods(module.prereqTree || null).includes(selectedNode),
      );
      const position = nodePositions[module.id] || DEFAULT_NODE_POSITION;
      const isCompulsory = graphCompulsoryMods.includes(module.id);
      return {
        id: module.id,
        position,
        type: "moduleNodeType",
        data: { label: module.id, showAsterisk: isCompulsory },
        style: {
          color: "#000000",
          backgroundColor: getNodeBackground(module.id, completedIds, takenIds),
          borderRadius: "8px",
          fontSize: "11px",
          border: getNodeBorder({
            moduleId: module.id,
            isSelected,
            isConnected,
            completedIds,
            takenIds,
          }),
          opacity: selectedNode && !isSelected && !isConnected ? 0.4 : 1,
          cursor: "pointer",
        },
      };
    });

    return [...base, ...calculatedJunctionNodes];
  }, [
    graphAllMods,
    selectedNode,
    completedIds,
    takenIds,
    nodePositions,
    calculatedJunctionNodes,
    graphCompulsoryMods,
  ]);

  const handleNodeClick = (_, node) => {
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  };

  const sideBarInGraph = useMemo(
    () => new Set(allMods.map((mod) => mod.id)),
    [allMods],
  );

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <ModeToggle
        mode={mode}
        setMode={setMode}
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
        showTermSelector={mode === "Simple"}
      />

      {mode === "All" && (
        <div className="flex flex-row h-full w-full overflow-hidden">
          <Sidebar
            isOpen={isSideBarOpen}
            setIsOpen={setIsSideBarOpen}
            mods={allMods}
            inGraph={sideBarInGraph}
            centerNode={centerNode}
          />
          <div className="flex-1 relative h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodeClick={handleNodeClick}
              nodeTypes={nodeType}
              colorMode="dark"
              fitView
              panOnScroll={true}
              selectionOnDrag={true}
              panOnDrag={false}
            >
              <Controls />
            </ReactFlow>
          </div>
        </div>
      )}

      {mode === "Simple" && (
        <Simple
          mods={mods}
          completedMods={graphCompletedMods}
          compulsoryMods={graphCompulsoryMods}
          takenMods={graphTakenMods}
          allMods={allMods}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          prereqMap={prereqMap}
          selectedTerm={selectedTerm}
        />
      )}
    </div>
  );
}
