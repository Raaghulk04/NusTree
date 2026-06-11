import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState } from "react";
import isPrecluded from "@/graph/isPreclusion";
import { computeNodePositions } from "./layoutUtils";
import Sidebar from "@/components/sideBar";

export default function Simple({
  mods,
  completedMods,
  compulsoryMods,
  takenMods,
  allMods,
  isSideBarOpen,
  setIsSideBarOpen,
}) {
  // completedMods is an Object with id, moduleId, planYear and planSemester
  // compulsoryMods is just the id

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showEligible, setShowEligible] = useState(false);

  useEffect(() => {
    async function calculateNodes() {
      setIsLoading(true);
      const completedIds = completedMods.map((module) => ({
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
      console.log("finalNodes", finalNodes);
      const nodeForPositions = mods.filter(
        (m) => finalNodes.find((fm) => fm.id == m.id) != undefined,
      );
      const positions = computeNodePositions(nodeForPositions);
      // filter out takenIds (eligible mods) depending on whether the button is
      // toggled or not

      let availableNodes = finalNodes.filter(
        (mods) => !takenIds.some((m) => m.id === mods.id && mods.code === 1),
      );

      availableNodes = showEligible ? finalNodes : availableNodes;

      availableNodes.forEach((m) => {
        if (!nodeForPositions.find((nm) => nm.id == m.id)) {
          console.log(m.id);
        }
      });
      console.log("nodeForPositions", nodeForPositions);
      const flowNodes = availableNodes.map((mod, index) => {
        const xPosition = positions[mod.id]?.x ?? 0;
        const yPosition = positions[mod.id]?.y ?? 0;

        return {
          id: mod.id,
          position: { x: xPosition, y: yPosition }, // React Flow expects this object
          data: { label: mod.id }, // The text that shows inside the box
          // Optional: Match style to your header layout legend
          style: {
            background:
              mod.code === 2
                ? "#bbf7d0"
                : mod.code === 1
                  ? "#bfdbfe"
                  : "#ffffff",
            color: "#000000",
            border: "1px solid #374151",
            borderRadius: "6px",
            padding: "10px",
          },
        };
      });

      setNodes(flowNodes);
      setIsLoading(false);
    }
    calculateNodes();
  }, [completedMods, compulsoryMods, takenMods, showEligible]);

  return (
    <div className="flex flex-row h-full w-full overflow-hidden">
      <Sidebar
        isOpen={isSideBarOpen}
        setIsOpen={setIsSideBarOpen}
        mods={allMods}
      />

      {/* Graph Canvas Container */}
      <div className="flex-1 relative h-full">
        <ReactFlow nodes={nodes} colorMode="dark" fitView>
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
