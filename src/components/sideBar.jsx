import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  FolderCanvas,
  Settings,
} from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
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
      <h1 className="text-xl font-bold mb-8">My App</h1>

      <nav className="flex flex-col gap-2">
        <Link
          href="/dashboard"
          className="rounded px-3 py-2 hover:bg-slate-800"
        >
          Dashboard
        </Link>

        <Link href="/projects" className="rounded px-3 py-2 hover:bg-slate-800">
          Projects
        </Link>

        <Link href="/settings" className="rounded px-3 py-2 hover:bg-slate-800">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
