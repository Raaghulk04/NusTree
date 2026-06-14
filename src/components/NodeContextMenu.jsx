import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NodeContextMenu({ x, y, data, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        if (
          e.type === "contextmenu" ||
          (e.type === "mousedown" && e.button !== 2)
        ) {
          onClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("contextmenu", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("contextmenu", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      onContextMenu={(e) => e.stopPropagation()}
      className="nodrag nopan" // Prevents dragging/panning when interacting with menu
      style={{
        position: "absolute",
        top: "100%", // Position it below the node
        left: 0,
        zIndex: 1000,
        minWidth: "180px",
        marginTop: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
      }}
    >
      <Card className="border border-slate-700 bg-[#151e2d] text-[#f1f5f9] shadow-xl">
        <CardHeader className="p-3">
          <CardTitle className="text-sm font-bold leading-none">
            {data.label}
          </CardTitle>
          <CardDescription className="text-[10px] text-gray-400 mt-1">
            {data.title}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-3">
          <Button
            variant="outline"
            size="sm"
            className="w-full h-7 text-[10px] border-gray-700 text-black dark:text-white"
          >
            Mark as completed
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
