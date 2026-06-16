import { Handle, Position } from "@xyflow/react";

export function JunctionNode({ data }) {
  return (
    <div
      style={{
        width: 35,
        height: 35,
        borderRadius: "50%",
        backgroundColor: "#8b5cf6",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        fontWeight: "bold",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Target Handles (Incoming edges from left or right) */}
      <Handle
        type="target"
        position={Position.Left}
        id="target-left"
        style={{
          opacity: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "transparent",
          border: "none",
        }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="target-right"
        style={{
          opacity: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "transparent",
          border: "none",
        }}
      />

      {data.label}

      {/* Source Handles (Outgoing edges to left or right) */}
      <Handle
        type="source"
        position={Position.Right}
        id="source-right"
        style={{
          opacity: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "transparent",
          border: "none",
        }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="source-left"
        style={{
          opacity: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "transparent",
          border: "none",
        }}
      />
    </div>
  );
}
