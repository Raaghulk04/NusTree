import { useEffect, useRef } from "react";
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
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{
        position: "fixed",
        top: y,
        left: x,
        zIndex: 1000,
        background: "#0f172a",
        border: "1px solid #334155",
        borderRadius: "8px",
        padding: "12px",
        minWidth: "200px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        color: "#f1f5f9",
      }}
    >
      <Card size="sm" className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle>Course Id</CardTitle>
          <CardDescription>Course title</CardDescription>
        </CardHeader>
        <CardContent>Course Description</CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Mark as completed
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
