import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState } from "react";
import isPrecluded from "@/graph/isPreclusion";

export default function Simple({ completedMods, compulsoryMods }) {
  console.log("completedMOds");
  console.log(compulsoryMods);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

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
      const takenIds = [];
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
      console.log("finalNodes", finalNodes);
      const flowNodes = finalNodes.map((mod, index) => {
        const xPosition = (index % 5) * 200;
        const yPosition = Math.floor(index / 5) * 150;

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
    }
    calculateNodes();
  }, [completedMods, compulsoryMods]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
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
    </div>
  );
}
