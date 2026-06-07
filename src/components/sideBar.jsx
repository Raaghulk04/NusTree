import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  FolderCanvas,
  Settings,
} from "lucide-react";
import { ModuleSearchDropdown } from "./module-search-dropdown";
import { SearchDropdown } from "@/components/ui/search-dropdown";
import { SidebarSearch } from "@/components/sidebar-search";

export default function Sidebar({ isOpen, setIsOpen, mods }) {
  console.log("In Sidebar now");
  return (
    <aside
      className={`bg-zinc-900 text-zinc-50 h-full p-4 flex flex-col relative transition-all duration-300 ease-in-out border-r border-zinc-800 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-50 rounded-full p-1 border border-zinc-700 z-50 transition-transform shadow-md"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
      <h1 className="text-xl font-bold mb-8"></h1>
      <SidebarSearch dataOptions={mods} />
      <nav className="flex flex-col gap-2"></nav>
    </aside>
  );
}
