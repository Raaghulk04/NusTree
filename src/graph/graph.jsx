import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { TreeDeciduous } from "lucide-react";
import { useState, useMemo } from "react";
import Basic from "@/graph/basic";
import ModeToggle from "./modeToggle";
import Simple from "@/graph/simple";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";
import { computeNodePositions, extractMods } from "@/graph/layoutUtils";
import SideBar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";

export default function Graph({
  allMods,
  takenMods,
  completedMods,
  compulsoryMods,
}) {
  console.log("allMods", allMods);
  const [selectedNode, setSelectedNode] = useState(null);
  const [basic, setBasic] = useState(true);
  const [mode, setMode] = useState("eligible");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const allModIds = new Set(allMods.map((m) => m.id));
  const takenIds = new Set((takenMods || []).map((m) => m.id));
  const completedIds = new Set((completedMods || []).map((m) => m.moduleId));
  console.log("taken", takenIds);
  console.log("completed", completedIds);

  // if (basic === true) {
  //   return (
  //     <div>
  //       <Basic
  //         allMods={allMods}
  //         takenMods={takenMods}
  //         completedMods={completedMods}
  //         compulsoryMods={compulsoryMods}
  //       />
  //     </div>
  //   );
  // }

  const nodePositions = useMemo(() => computeNodePositions(allMods), [allMods]);

  const nodes = useMemo(() => {
    // 3. Build the ReactFlow structural layout grid
    return allMods.map((module) => {
      const isSelected = module.id === selectedNode;
      const isConnected =
        selectedNode &&
        (() => {
          const prereqs = extractMods(module.prereqTree || null);
          return prereqs.includes(selectedNode);
        })();
      const position = nodePositions[module.id] || { x: 0, y: 0 };
      return {
        id: module.id,
        position,
        data: { label: module.id },
        style: {
          color: "#000000",
          backgroundColor: completedIds.has(module.id)
            ? "#86efac"
            : takenIds.has(module.id)
              ? "#93c5fd"
              : "#e5e7eb",
          borderRadius: "8px",
          fontSize: "11px",
          border: isSelected
            ? "2px solid #f59e0b"
            : isConnected
              ? "2px solid #3b82f6"
              : completedIds.has(module.id)
                ? "2px solid #22c55e"
                : takenIds.has(module.id)
                  ? "2px solid #3b82f6"
                  : "1px solid #d1d5db",
          opacity: selectedNode && !isSelected && !isConnected ? 0.4 : 1,
          cursor: "pointer",
        },
      };
    });
  }, [allMods, selectedNode, completedMods, takenMods]);

  const edges = useMemo(() => {
    if (!selectedNode) return [];

    const result = [];
    const edgeIds = new Set();

    allMods.forEach((module) => {
      if (!module.prereqTree) return;

      const prereqs = [...new Set(extractMods(module.prereqTree))];
      const isSelected = selectedNode === module.id;
      const isPrereqOfSelected = prereqs.includes(selectedNode);

      if (!isSelected && !isPrereqOfSelected) return;

      if (isSelected) {
        buildTree(module.prereqTree, module.id, allModIds, result, edgeIds);
      } else {
        const edgeType = findEdgeType(module.prereqTree, selectedNode) || "and";
        const edgeId = `${selectedNode}-${module.id}`;

        if (!edgeIds.has(edgeId)) {
          edgeIds.add(edgeId);
          result.push({
            id: edgeId,
            source: selectedNode,
            target: module.id,
            label: edgeType === "or" ? "OR" : "AND",
            style: {
              stroke: edgeType === "or" ? "#8b5cf6" : "#3b82f6",
              strokeWidth: 2,
            },
            labelStyle: {
              fontSize: "10px",
              fill: edgeType === "or" ? "#8b5cf6" : "#3b82f6",
            },
          });
        }
      }
    });

    return result;
  }, [selectedNode, allMods]);

  const handleNodeClick = (_, node) => {
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  };

  const nodeType = useMemo(() => ({ module: ModuleNode }), []);

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
      <ModeToggle mode={mode} setMode={setMode} />
      {mode === "eligible" && (
        <div className="flex w-full h-screen flex-row overflow-hidden bg-zinc-950 text-slate-100">
          {/* 1. Left aligned layout control panel */}
          <SideBar
            isOpen={isSideBarOpen}
            setIsOpen={setIsSideBarOpen}
            mods={allMods}
          />
          {/* 2. Main content area takes up the remaining horizontal space */}
          <div className="flex-1 h-full relative bg-zinc-900">
            <Basic
              allMods={allMods}
              takenMods={takenMods}
              completedMods={completedMods}
              compulsoryMods={compulsoryMods}
            />
          </div>
        </div>
      )}

      {mode === "All" && (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={handleNodeClick}
          colorMode="dark"
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      )}

      {mode === "Simple" && (
        <Simple completedMods={completedMods} compulsoryMods={compulsoryMods} />
      )}
    </div>
  );
}
