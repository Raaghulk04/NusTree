import { useReactFlow } from "@xyflow/react";

export default function DropHandler({ setNodes }) {
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData("application/reactflow");
    if (!raw) return;

    const mod = JSON.parse(raw);
    const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });

    const newNode = {
      id: mod.id,
      position,
      data: { label: mod.id, status: mod.status },
      style: {
        background: "#bfdbfe",
        color: "#000000",
        border: "1px solid #374151",
        borderRadius: "6px",
        padding: "10px",
        cursor: "pointer",
      },
    };

    setNodes((prev) => {
      if (prev.find((n) => n.id === mod.id)) return prev;
      return [...prev, newNode];
    });
  };

  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "all",
      }}
    />
  );
}
