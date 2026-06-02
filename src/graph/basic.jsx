import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState } from "react";
import isPrecluded from "@/graph/isPreclusion";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";

const extractMods = (tree) => {
  if (!tree) return [];
  if (typeof tree === "string") return [tree.split(":")[0]];
  if (tree.or) return tree.or.flatMap(extractMods);
  if (tree.and) return tree.and.flatMap(extractMods);
  return [];
};

export default function Basic({
  allMods,
  takenMods,
  completedMods,
  compulsoryMods,
}) {
  console.log("takenMods at basic", takenMods);
  const [finalEntries, setFinalEntries] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
        const allEntries = await isPrecluded({
          completedIds,
          takenIds,
          compulsoryIds,
        });

        const deduped = Object.values(
          Array.from(allEntries)
            .sort((a, b) => a.code - b.code)
            .reduce((acc, entry) => {
              acc[entry.id] = entry;
              return acc;
            }, {}),
        );

        const reactFlowNodes = deduped.map((mod, index) => {
          const xPosition = (index % 5) * 200;
          const yPosition = Math.floor(index / 5) * 150;

          return {
            id: mod.id,
            position: { x: xPosition, y: yPosition },
            data: { label: mod.id },
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
              cursor: "pointer",
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

  const allModIds = useMemo(
    () => new Set(finalEntries.map((n) => n.id)),
    [finalEntries],
  );

  const edges = useMemo(() => {
    if (!selectedNode) return [];

    const result = [];
    const edgeIds = new Set();

    finalEntries.forEach((node) => {
      const module = allMods.find((m) => m.id === node.id);
      if (!module?.prereqTree) return;

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
  }, [selectedNode, finalEntries, allMods, allModIds]);

  const handleNodeClick = (_, node) => {
    console.log("Clicked", node.id);
    console.log(
      "all mods entry",
      allMods.find((m) => m.id === node.id),
    );
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  };

  if (isLoading) {
    return <div>Rendering Graph.....</div>;
  }

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
      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={finalEntries}
          edges={edges}
          colorMode="dark"
          onNodeClick={handleNodeClick}
          elementsSelectable={true}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
