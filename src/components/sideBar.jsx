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

export default function Sidebar({ isOpen, setIsOpen, mods }) {
  console.log("In Sidebar now");
  return (
    <aside
      className={`bg-slate-900 text-white h-full p-4 flex flex-col relative transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-6 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-1 border border-slate-700 z-50 transition-transform"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
      <h1 className="text-xl font-bold mb-8"></h1>
      <SearchDropdown dataOptions={mods} />
      <nav className="flex flex-col gap-2"></nav>
    </aside>
  );
}
