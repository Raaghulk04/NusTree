// ModuleNode.jsx
import { useState, useCallback, useRef } from "react";
import NodeContextMenu from "./NodeContextMenu";
import {
  Handle,
  Position,
  useReactFlow,
  useOnViewportChange,
} from "@xyflow/react";

export default function ModuleNode({ id, data }) {
  const [menuPos, setMenuPos] = useState(null);
  const nodeRef = useRef(null);
  const { setNodes } = useReactFlow();

  // Close menu whenever user pans or zooms
  useOnViewportChange({
    onChange: useCallback(() => {
      if (menuPos) closeMenu();
    }, [menuPos]),
  });

  const openMenu = useCallback(
    (rect) => {
      setMenuPos({ x: rect.left, y: rect.bottom + 8 });
      setNodes((nodes) =>
        nodes.map((n) =>
          n.id === id ? { ...n, zIndex: 9999 } : { ...n, zIndex: 0 },
        ),
      );
    },
    [id, setNodes],
  );

  const closeMenu = useCallback(() => {
    setMenuPos(null);
    setNodes((nodes) =>
      nodes.map((n) => (n.id === id ? { ...n, zIndex: 0 } : n)),
    );
  }, [id, setNodes]);

  const onContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const rect = nodeRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (menuPos) {
        closeMenu();
      } else {
        openMenu(rect);
      }
    },
    [menuPos, openMenu, closeMenu],
  );

  return (
    <div
      ref={nodeRef}
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

      {menuPos && (
        <NodeContextMenu
          x={menuPos.x}
          y={menuPos.y}
          data={data}
          onClose={closeMenu}
          onMark={() => data.onCompleted(data.label)}
        />
      )}
    </div>
  );
}
