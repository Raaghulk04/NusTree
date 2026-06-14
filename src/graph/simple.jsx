import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState, useCallback } from "react";
import isPrecluded from "@/graph/isPreclusion";
import { computeNodePositions } from "./layoutUtils";
import Sidebar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";

// 1. Unified Node Colors matched exactly with Graph.jsx
const NODE_COLORS = {
  completed: "#86efac",
  taken: "#93c5fd",
  default: "#e5e7eb",
  completedBorder: "#22c55e",
  connectedBorder: "#3b82f6", // used for taken mods border
  defaultBorder: "#d1d5db",
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

export default function Simple({
  mods,
  completedMods,
  compulsoryMods,
  takenMods,
  allMods,
  isSideBarOpen,
  setIsSideBarOpen,
}) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
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

  useEffect(() => {
    async function calculateNodes() {
      setIsLoading(true);
      const completedIds = localCompletedMods.map((module) => ({
        code: 2,
        id: module.moduleId,
      }));
      const compulsoryIds =
        compulsoryMods.map((module) => ({
          code: 0,
          id: module,
        })) || [];
      const takenIds = (takenMods || []).map((mod) => ({
        code: 1,
        id: mod.id,
      }));
      const final = await isPrecluded({
        completedIds,
        takenIds,
        compulsoryIds,
      });

      const uniques = new Map();
      for (let i = 0; i < final.length; i++) {
        if (!uniques.has(final[i].id)) {
          uniques.set(final[i].id, final[i]);
        }
      }
      const finalNodes = [...uniques.values()];

      const nodeForPositions = mods.filter(
        (m) => finalNodes.find((fm) => fm.id == m.id) != undefined,
      );
      const positions = computeNodePositions(nodeForPositions);

      let availableNodes = finalNodes.filter(
        (mods) => !takenIds.some((m) => m.id === mods.id && mods.code === 1),
      );

      availableNodes = showEligible ? finalNodes : availableNodes;
      console.log("flowNode", availableNodes);
      const flowNodes = availableNodes.map((mod, index) => {
        const xPosition = positions[mod.id]?.x ?? 0;
        const yPosition = positions[mod.id]?.y ?? 0;

        const modObj = mods.filter((m) => m.id === mod.id)[0];
        const title = modObj.title;
        const describe = modObj.description;

        return {
          id: mod.id,
          type: "moduleNodeType",
          position: { x: xPosition, y: yPosition },
          data: {
            label: mod.id,
            title: title,
            description: describe,
            onCompleted: (moduleId) => handleModuleCompleted(moduleId),
          },
          // 3. Updated styles to align with Graph.jsx specs (sans selection states)
          style: {
            color: "#000000",
            backgroundColor: getNodeBackground(mod.code),
            borderRadius: "8px",
            fontSize: "11px",
            border: getNodeBorder(mod.code),
            cursor: "pointer",
          },
        };
      });

      setNodes(flowNodes);
      setIsLoading(false);
    }
    calculateNodes();
  }, [localCompletedMods, compulsoryMods, takenMods, showEligible]);

  return (
    <div className="flex flex-row h-full w-full overflow-hidden">
      <Sidebar
        isOpen={isSideBarOpen}
        setIsOpen={setIsSideBarOpen}
        mods={allMods}
      />

      {/* Graph Canvas Container */}
      <div className="flex-1 relative h-full">
        <ReactFlow nodeTypes={nodeTypes} nodes={nodes} colorMode="dark" fitView>
          <Background />
          <Controls />
        </ReactFlow>

        {/* Floating Action Button */}
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
