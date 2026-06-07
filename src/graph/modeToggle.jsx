import Legend from "@/graph/legend";

const MODES = [
  { id: "All", label: "All Modules" },
  { id: "Simple", label: "Simple" },
];

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-white/50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
      <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
        {MODES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setMode(id)}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
              mode === id
                ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-sm"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="ml-auto">
        <Legend />
      </div>
    </div>
  );
}
