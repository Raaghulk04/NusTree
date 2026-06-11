import { useState, useCallback } from "react";
import NodeContextMenu from "./NodeContextMenu";
import { Handle, Position } from "@xyflow/react";

// src/components/ModuleNode.jsx
export default function ModuleNode({ data }) {
  const [menu, setMenu] = useState(null);

  const onContextMenu = useCallback((e) => {
    e.preventDefault();
    setMenu({ x: e.ClientX, y: e.ClientY });
    console.log("right clicked");
  }, []);

  const closeMenu = useCallback((e) => setMenu(null), []);

  return (
    <div
      className={`mod-node ${data.status}`}
      onContextMenu={onContextMenu}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        background: "#1e293b",
        border: "1px solid #334155",
        color: "#f1f5f9",
        minWidth: 120,
        cursor: "context-menu",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div style={{ fontWeight: 600 }}>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
      {menu && (
        <NodeContextMenu
          x={menu.x}
          y={menu.y}
          data={data}
          onClose={closeMenu}
        />
      )}
    </div>
  );
}
