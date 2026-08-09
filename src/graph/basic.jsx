import { ReactFlow, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState } from "react";
import isPrecluded from "@/graph/isPreclusion";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";
import ModuleNode from "@/components/ModuleNode";
import useDropHandler from "@/graph/useDropHandler";

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
      const mod = allMods.find((m) => m.id === node.id);
      if (!mod?.prereqTree) return;

      const prereqs = [...new Set(extractMods(mod.prereqTree))];
      const isSelected = selectedNode === mod.id;
      const isPrereqOfSelected = prereqs.includes(selectedNode);

      if (!isSelected && !isPrereqOfSelected) return;

      if (isSelected) {
        buildTree(mod.prereqTree, mod.id, allModIds, result, edgeIds);
      } else {
        const edgeType = findEdgeType(mod.prereqTree, selectedNode) || "and";
        const edgeId = `${selectedNode}-${mod.id}`;

        if (!edgeIds.has(edgeId)) {
          edgeIds.add(edgeId);
          result.push({
            id: edgeId,
            source: selectedNode,
            target: mod.id,
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
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  };

  const nodeType = useMemo(() => ({ module: ModuleNode }), []);

  const handleNewNodeDrop = (mod, position) => {
    const newNode = {
      id: mod.id,
      type: "module",
      position,
      data: { label: mod.id },
      style: {
        background: "#bfdbfe",
        color: "#000000",
        border: "1px solid #374151",
        borderRadius: "6px",
        padding: "10px",
      },
    };

    setFinalEntries((prev) => {
      if (prev.find((n) => n.id === mod.id)) {
        console.log("found");
        return prev;
      }
      return [...prev, newNode];
    });
  };

  const { onDragOver, onDrop } = useDropHandler(handleNewNodeDrop);

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
      <div onDragOver={onDragOver} onDrop={onDrop} style={{ flex: 1 }}>
        <ReactFlow
          nodeTypes={nodeType}
          nodes={finalEntries}
          edges={edges}
          colorMode="dark"
          onNodeClick={handleNodeClick}
          elementsSelectable={true}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
