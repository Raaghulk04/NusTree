// NodeContextMenu.jsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
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
        width: "250px",
        background:
          "linear-gradient(180deg, rgba(24,24,27,0.98) 0%, rgba(9,9,11,0.98) 100%)",
        border: "1px solid rgba(82,82,91,0.9)",
        borderRadius: "14px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          paddingBottom: "8px",
          borderBottom: "1px solid rgba(63,63,70,0.9)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "0.02em",
            }}
          >
            {data.label}
          </div>
          <button
            onClick={handleNusModsClicked}
            style={{
              width: "48px",
              height: "48px",
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
                width: "44px",
                height: "44px",
                position: "relative",
              }}
            >
              <Image
                src="/images/NusMods.png"
                alt="Open in NusMods"
                width={44}
                height={44}
                sizes="44px"
                priority
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
          </button>
        </div>

        <div
          style={{
            fontSize: "11px",
            color: "#a1a1aa",
            lineHeight: 1.35,
          }}
        >
          {data.title}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "10px",
        }}
      >
        <button
          onClick={handleMarked}
          style={{
            flex: 1,
            minHeight: "64px",
            fontSize: "12px",
            fontWeight: 700,
            background:
              "linear-gradient(180deg, rgba(24,24,27,0.98) 0%, rgba(15,23,42,0.98) 100%)",
            border: "1px solid rgba(63,63,70,1)",
            borderRadius: "12px",
            color: "#f8fafc",
            cursor: "pointer",
            padding: "10px 12px",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Mark as completed
        </button>
      </div>
    </div>,
    document.body,
  );
}
