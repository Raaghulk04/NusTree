// NodeContextMenu.jsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import addPlannedModule from "@/components/add-planned-module";

export default function NodeContextMenu({ x, y, data, onClose, onMark }) {
  const menuRef = useRef(null);

  const handleMarked = async () => {
    console.log("clicked");
    try {
      await addPlannedModule(data.label, 1, 1);
      onMark();
    } catch (error) {
      console.log(error);
    }

    console.log("click done");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.button === 2) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside, true);
  }, [onClose]);

  return createPortal(
    <div
      ref={menuRef}
      onContextMenu={(e) => e.stopPropagation()}
      className="nodrag nopan"
      style={{
        position: "fixed",
        top: y,
        left: x,
        zIndex: 99999,
        width: "140px",
        background: "#151e2d",
        border: "1px solid #334155",
        borderRadius: "6px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        padding: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          fontWeight: 700,
          color: "#f1f5f9",
          lineHeight: 1.2,
        }}
      >
        {data.label}
      </div>
      <div style={{ fontSize: "9px", color: "#9ca3af", lineHeight: 1.2 }}>
        {data.title}
      </div>
      <button
        onClick={handleMarked}
        style={{
          marginTop: "2px",
          width: "100%",
          height: "22px",
          fontSize: "9px",
          background: "transparent",
          border: "1px solid #4b5563",
          borderRadius: "4px",
          color: "#f1f5f9",
          cursor: "pointer",
        }}
      >
        Mark as completed
      </button>
    </div>,
    document.body,
  );
}
