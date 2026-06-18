"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function SidebarSearch({
  dataOptions = [],
  inGraph = [],
  placeholder = "Search by module code...",
}) {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  let safeOptions = Array.isArray(dataOptions) ? dataOptions : [];
  const inGraphIds = new Set(inGraph.map((n) => n.id));
  safeOptions = safeOptions.filter((opt) => !inGraphIds.has(opt.id));

  //safeOptions = safeOptions.map((mod) => mod.id);
  const filteredOptions = safeOptions
    .filter((opt) => {
      if (!opt) return false;

      const normalizedSearch = search.toLowerCase();

      const optId =
        opt.id !== undefined && opt.id !== null
          ? String(opt.id).toLowerCase()
          : "";
      const optTitle =
        opt.title !== undefined && opt.title !== null
          ? String(opt.title).toLowerCase()
          : "";

      return (
        optId.includes(normalizedSearch) || optTitle.includes(normalizedSearch)
      );
    })
    .slice(0, 5);

  const filteredGraph = inGraph
    .filter((opt) => {
      if (!opt) return false;

      const normalizedSearch = search.toLowerCase();

      const optId =
        opt.id !== undefined && opt.id !== null
          ? String(opt.id).toLowerCase()
          : "";

      const optTitle =
        opt.title !== undefined && opt.title !== null
          ? String(opt.title).toLowerCase()
          : "";

      return (
        optId.includes(normalizedSearch) || optTitle.includes(normalizedSearch)
      );
    })
    .slice(0, 5);

  return (
    <div className="w-full">
      <input
        className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />
      {open && search.length > 0 && filteredGraph.length > 0 && (
        <div className="w-full mt-2 max-h-[60vh] overflow-y-auto">
          <p>In Graph</p>
          {filteredGraph.map((opt) => (
            <div
              key={opt.id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData(
                  "application/reactflow",
                  JSON.stringify({
                    id: opt.id,
                    title: opt.title,
                    status: opt.status,
                  }),
                );
                e.dataTransfer.effectAllowed = "move";
              }}
              className={cn(
                "px-3 py-2 text-sm cursor-grab rounded text-slate-100 hover:bg-slate-700/50 select-none",
              )}
            >
              <span className="font-medium">{opt.id}</span>
              <span className="text-slate-400 ml-2 text-xs">{opt.title}</span>
            </div>
          ))}
        </div>
      )}

      {open && search.length > 0 && filteredGraph.length === 0 && (
        <div className="mt-2 px-3 py-2 text-sm text-slate-500">
          No such module in Graph
        </div>
      )}

      {open && search.length > 0 && filteredOptions.length > 0 && (
        <div className="w-full mt-2 max-h-[60vh] overflow-y-auto">
          <p>Not In Graph</p>
          {filteredOptions.map((opt) => (
            <div
              key={opt.id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData(
                  "application/reactflow",
                  JSON.stringify({
                    id: opt.id,
                    title: opt.title,
                    status: opt.status,
                  }),
                );
                e.dataTransfer.effectAllowed = "move";
              }}
              className={cn(
                "px-3 py-2 text-sm cursor-grab rounded text-slate-100 hover:bg-slate-700/50 select-none",
              )}
            >
              <span className="font-medium">{opt.id}</span>
              <span className="text-slate-400 ml-2 text-xs">{opt.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
