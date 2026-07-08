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
  console.log("data", data);
  const [menuPos, setMenuPos] = useState(null);
  const nodeRef = useRef(null);
  const { setNodes } = useReactFlow();

  const closeMenu = useCallback(() => {
    setMenuPos(null);
    setNodes((nodes) =>
      nodes.map((n) => (n.id === id ? { ...n, zIndex: 0 } : n)),
    );
  }, [id, setNodes]);

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

  // Close menu whenever user pans or zooms
  useOnViewportChange({
    onChange: useCallback(() => {
      if (menuPos) closeMenu();
    }, [menuPos, closeMenu]),
  });

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
        background: "inherit",
        border: "inherit",
        color: "inherit",
        minWidth: 120,
        cursor: "context-menu",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div style={{ fontWeight: 600 }}>{data.label}</div>
      {data.showAsterisk && (
        <div
          className="absolute top-1 right-1 text-purple-400 font-bold text-2xl leading-none"
          style={{ textShadow: "0 0 8px #c084fc, 0 0 20px #a855f7" }}
        >
          *
        </div>
      )}
      <Handle type="source" position={Position.Bottom} />

      {menuPos && (
        <NodeContextMenu
          x={menuPos.x}
          y={menuPos.y}
          data={data}
          onClose={closeMenu}
          onMark={() => data.onCompleted(data.label)}
          state={data.state}
        />
      )}
    </div>
  );
}
