import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState } from "react";
import isPrecluded from "@/graph/isPreclusion";

export default function Basic({
  allMods,
  takenMods,
  completedMods,
  compulsoryMods,
}) {
  const [finalEntries, setFinalEntries] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    async function calculateNodes() {
      setIsLoading(true);
      const takenIds = takenMods.map((mod) => ({ code: 1, id: mod.id }));
      const completedIds = completedMods.map((mod) => ({
        code: 2,
        id: mod.moduleId,
      }));
      const compulsoryIds = (compulsoryMods || []).map((mod) => ({
        code: 0,
        id: mod,
      }));
      try {
        console.log("in basic, takenIds", takenIds);
        console.log("in basic, compulsoryids", compulsoryIds);
        const allEntries = await isPrecluded({
          completedIds,
          takenIds,
          compulsoryIds,
        });
        console.log("allentries", allEntries);

        // remove duplicates by the correct priority order
        const deduped = Object.values(
          Array.from(allEntries)
            .sort((a, b) => a.code - b.code) // 0 → 1 → 2, so 2 wins
            .reduce((acc, entry) => {
              acc[entry.id] = entry; // later (higher code) overwrites earlier
              return acc;
            }, {}),
        );

        const reactFlowNodes = deduped.map((mod, index) => {
          // Stagger positions slightly so they don't stack directly on top of each other
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

        setFinalEntries(reactFlowNodes);
      } catch (error) {
        console.error("failed calculating nodes", error);
      } finally {
        setIsLoading(false);
      }
    }
    calculateNodes();
  }, [completedMods, takenMods, compulsoryMods]);

  if (isLoading) {
    return <div>Rendering Graph.....</div>;
  }

  console.log("finally", finalEntries);
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
        <ReactFlow nodes={finalEntries} colorMode="dark" fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
