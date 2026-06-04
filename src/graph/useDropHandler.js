import { useReactFlow } from "@xyflow/react";

export default function useDropHandler(handleNewNodeDrop) {
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData("application/reactflow");
    if (!raw) return;

    try {
      const mod = JSON.parse(raw);
      const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });

      handleNewNodeDrop(mod, position);
    } catch (error) {
      console.log("Failed parsing node drop", error);
    }
  };

  return { onDragOver, onDrop };
}
