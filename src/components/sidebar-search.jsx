"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function SidebarSearch({
  dataOptions = [],
  placeholder = "Search by module code...",
}) {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const safeOptions = Array.isArray(dataOptions) ? dataOptions : [];

  const filteredOptions = safeOptions
    .filter((opt) => {
      const normalizedSearch = search.toLowerCase();
      return (
        opt.id.toLowerCase().includes(normalizedSearch) ||
        (opt.title?.toLowerCase().includes(normalizedSearch) ?? false)
      );
    })
    .slice(0, 20);

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

      {open && search.length > 0 && filteredOptions.length > 0 && (
        <div className="w-full mt-2 max-h-[60vh] overflow-y-auto">
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

      {open && search.length > 0 && filteredOptions.length === 0 && (
        <div className="mt-2 px-3 py-2 text-sm text-slate-500">
          No modules found
        </div>
      )}
    </div>
  );
}
