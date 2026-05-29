import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo } from "react";

export default function Basic({
  allMods,
  takenMods,
  completedMods,
  compulsoryMods,
}) {
  const nodes = useMemo(() => {
    const takenIds = takenMods.map((mod) => ({ code: 1, id: mod.id }));
    const completedIds = completedMods.map((mod) => ({
      code: 2,
      id: mod.moduleId,
    }));
    const compulsoryIds = (compulsoryMods || []).map((mod) => ({
      code: 0,
      id: mod,
    }));

    const allEntries = takenIds.concat(completedIds).concat(compulsoryIds);

    // deduplicate — sort ascending so higher code overwrites lower
    const deduped = Object.values(
      allEntries
        .sort((a, b) => a.code - b.code) // 0 → 1 → 2, so 2 wins
        .reduce((acc, entry) => {
          acc[entry.id] = entry; // later (higher code) overwrites earlier
          return acc;
        }, {}),
    );

    return deduped.map((entry, index) => ({
      id: entry.id,
      position: {
        x: (index % 10) * 160, // 10 per row
        y: Math.floor(index / 10) * 80, // new row every 10
      },
      data: { label: entry.id },
      style: {
        backgroundColor:
          entry.code === 2
            ? "#bbf7d0" // green - completed
            : entry.code === 1
              ? "#bfdbfe" // blue - eligible
              : "#f3f4f6", // grey - compulsory but not yet eligible
        color: "#0f172a",
        fontWeight: "600", // Gives the text a bit more weight to pop
        borderRadius: "8px",
        fontSize: "11px",
        border: "none",
      },
    }));
  }, [takenMods, completedMods, compulsoryMods]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div
        style={{
          padding: "8px 16px",
          display: "flex",
          gap: "16px",
          fontSize: "12px",
          background: "#a1abf8",
          borderBottom: "1px solid #738bbb",
        }}
      >
        <span>🟢 Completed</span>
        <span>🔵 Eligible</span>
        <span>⬜ Compulsory</span>
      </div>
      <ReactFlow nodes={nodes} colorMode="dark" fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
