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
        minWidth: "220px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)", // Keeps the beautiful floating popover shadow
      }}
    >
      {/* Removed border-none from here because shadcn's Card uses a default border. 
        Instead, we control the custom background styling natively via Tailwind.
      */}
      <Card
        size="sm"
        className="border-none bg-[#151e2d] text-[#f1f5f9] mx-auto w-full max-w-sm"
      >
        <CardHeader>
          <CardTitle>Course Id</CardTitle>
          <CardDescription className="text-gray-400">
            Course title
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm">Course Description</CardContent>
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="w-full border-gray-700 text-black dark:text-white"
          >
            Mark as completed
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
