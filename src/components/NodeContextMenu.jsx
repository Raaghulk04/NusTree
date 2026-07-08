// NodeContextMenu.jsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import addPlannedModule from "@/components/add-planned-module";

export default function NodeContextMenu({ x, y, data, onClose, onMark, state }) {
  // state 0 refers to locked mod
  // state 1 refers to eligible mod
  // state 2 refers to completed mod
  // state 3 refers to invalid mod
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

  const handleNusModsClicked = () =>
    window.open(`https://nusmods.com/courses/${data.label}`, "_blank");

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


  let buttonContent = <button
          onClick={handleMarked}
          style={{
            flex: 1,
            minHeight: "36px",
            fontSize: "11px",
            fontWeight: 700,
            background:
              "linear-gradient(180deg, rgba(24,24,27,0.98) 0%, rgba(15,23,42,0.98) 100%)",
            border: "1px solid rgba(63,63,70,1)",
            borderRadius: "10px",
            color: "#f8fafc",
            cursor: "pointer",
            padding: "6px 8px",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Mark as completed
        </button>

  if (state === 0) {
    buttonContent = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          width: "100%",
          padding: "8px 12px",
          borderRadius: "8px",
          backgroundColor: "rgba(244, 63, 94, 0.08)",
          border: "1px solid rgba(244, 63, 94, 0.3)",
          color: "#f43f5e",
          fontSize: "11px",
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        <span>🔒</span>
        <span>Prerequisites Not Met</span>
      </div>
    );
  } else if (state === 2) {
    buttonContent = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          width: "100%",
          padding: "8px 12px",
          borderRadius: "8px",
          backgroundColor: "rgba(16, 185, 129, 0.08)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          color: "#10b981",
          fontSize: "11px",
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        <span>✓</span>
        <span>Completed</span>
      </div>
    );
  } else if (state === 3) {
    buttonContent = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          width: "100%",
          padding: "8px 12px",
          borderRadius: "8px",
          backgroundColor: "rgba(245, 158, 11, 0.08)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
          color: "#f59e0b",
          fontSize: "11px",
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        <span>⚠️</span>
        <span>Invalid Plan / Unmet Prereqs</span>
      </div>
    );
  }

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
        width: "208px",
        background:
          "linear-gradient(180deg, rgba(24,24,27,0.98) 0%, rgba(9,9,11,0.98) 100%)",
        border: "1px solid rgba(82,82,91,0.9)",
        borderRadius: "12px",
        boxShadow: "0 16px 30px rgba(0,0,0,0.4)",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "6px",
          paddingBottom: "2px",
          borderBottom: "1px solid rgba(63,63,70,0.9)",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            {data.label}
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#a1a1aa",
              lineHeight: 1.05,
              marginTop: "6px",
            }}
          >
            {data.title}
          </div>
        </div>
        <button
          onClick={handleNusModsClicked}
          style={{
            width: "60px",
            height: "60px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            flexShrink: 0,
          }}
          title="Open in NusMods"
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              position: "relative",
            }}
          >
            <Image
              src="/images/NusMods.png"
              alt="Open in NusMods"
              width={58}
              height={58}
              sizes="58px"
              priority
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "6px",
        }}
      >
      {buttonContent}  
      </div>
    </div>,
    document.body,
  );
}
