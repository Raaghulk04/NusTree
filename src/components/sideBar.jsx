import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { SidebarSearch } from "@/components/sidebar-search";

// isOpen: boolean if sideBar is open
// setIsOpen: function to open/close the sideBar
// mods: module data
export default function Sidebar({ isOpen, setIsOpen, mods }) {
  const sidebarRef = useRef(null);
  
  // 
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (!sidebarRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, setIsOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`bg-zinc-900 text-zinc-50 h-full p-4 flex flex-col relative transition-all duration-300 ease-in-out border-r border-zinc-800 ${
        isOpen ? "w-64" : "w-16"
      }`}
    > 
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
        aria-label={isOpen ? "Close module search" : "Open module search"}
      >
        <Search size={20} />
      </button>
      <h1 className="text-xl font-bold mb-8"></h1>
      {isOpen && (
        <SidebarSearch dataOptions={mods} />
      )}
      <nav className="flex flex-col gap-2"></nav>
    </aside>
  );
}
