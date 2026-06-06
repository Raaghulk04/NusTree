import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState } from "react";
import isPrecluded from "@/graph/isPreclusion";
import { computeNodePositions } from "./layoutUtils";

export default function Simple({ completedMods, compulsoryMods, takenMods }) {
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
      console.log("final", final);

      const uniques = new Map();
      for (let i = 0; i < final.length; i++) {
        if (!uniques.has(final[i].id)) {
          uniques.set(final[i].id, final[i]);
        }
      }
      const finalNodes = [...uniques.values()];
      const positions = computeNodePositions(finalNodes);
      console.log("Positions dictionary:", positions);
      // filter out takenIds (eligible mods) depending on whether the button is
      // toggled or not

      let availableNodes = finalNodes.filter(
        (mods) => !takenIds.some((m) => m.id === mods.id && mods.code === 1),
      );

      availableNodes = showEligible ? finalNodes : availableNodes;
      //positions.forEach((value, key) => console.log(key));
      const flowNodes = availableNodes.map((mod, index) => {
        const xPosition = positions[mod.id]?.x;
        const yPosition = positions[mod.id]?.y;

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
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ flex: 1 }}>
        {" "}
        {/* fills remaining height */}
        <ReactFlow nodes={nodes} colorMode="dark" fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setShowEligible(!showEligible)}
          style={{
            padding: "8px 16px",
            background: showEligible ? "#4f46e5" : "#1e1b4b",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            transition: "all 0.2s",
          }}
        >
          {showEligible ? "Hide Eligible Mods" : "Show Eligible Mods"}
        </button>
      </div>
    </div>
  );
}
