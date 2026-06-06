import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState } from "react";
import isPrecluded from "@/graph/isPreclusion";
import { computeNodePositions } from "./layoutUtils";
import { SidebarSearch } from "../components/sidebar-search";

export default function Simple({
  completedMods,
  compulsoryMods,
  takenMods,
  allMods,
}) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showEligible, setShowEligible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log("allMods", allMods);

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
      const positions = computeNodePositions(finalNodes);
      // filter out takenIds (eligible mods) depending on whether the button is
      // toggled or not

      let availableNodes = finalNodes.filter(
        (mods) => !takenIds.some((m) => m.id === mods.id && mods.code === 1),
      );

      availableNodes = showEligible ? finalNodes : availableNodes;

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
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: "#111827",
      }}
    >
      {/* 1. Sidebar Container with Dynamic Width & Transition styling */}
      <div
        style={{
          width: isCollapsed ? "60px" : "320px",
          minWidth: isCollapsed ? "60px" : "320px",
          height: "100%",
          borderRight: "1px solid #374151",
          backgroundColor: "#1f2937",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "all 0.3s ease", // Smooth slide transition
        }}
      >
        {/* Collapse Toggle Icon Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            position: "absolute",
            top: "12px",
            right: isCollapsed ? "16px" : "12px",
            zIndex: 20,
            background: "#374151",
            color: "#ffffff",
            border: "none",
            borderRadius: "50%",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {/* Simple CSS Arrow Icons changing direction based on state */}
          {isCollapsed ? (
            <span
              style={{ transform: "rotate(180deg)", display: "inline-block" }}
            >
              o
            </span>
          ) : (
            <span>c</span>
          )}
        </button>

        {/* Hide internal content cleanly when collapsed to prevent text overflowing */}
        <div
          style={{
            opacity: isCollapsed ? 0 : 1,
            visibility: isCollapsed ? "hidden" : "visible",
            transition: "opacity 0.2s ease",
            height: "100%",
            width: "100%",
            paddingTop: "50px", // Leaves clean space for the toggle button
          }}
        >
          <SidebarSearch dataOptions={allMods} />
        </div>
      </div>

      {/* 2. Graph Canvas Container */}
      <div style={{ flex: 1, height: "100%", position: "relative" }}>
        <ReactFlow nodes={nodes} colorMode="dark" fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      {/* 3. Floating Action Button (Shifts dynamically based on sidebar spacing) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "40px",
          zIndex: 1000,
          transition: "left 0.3s ease",
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
