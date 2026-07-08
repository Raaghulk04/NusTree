import Legend from "@/graph/legend";
import { TERMS, formatTerm } from "@/graph/termUtils";

const MODES = [
  { id: "All", label: "All Modules" },
  { id: "Simple", label: "Simple" },
];

export default function ModeToggle({
  mode,
  setMode,
  selectedTerm,
  setSelectedTerm,
  showTermSelector = false,
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white/50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
      <div className="flex shrink-0 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
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
      {showTermSelector && (
        <div className="min-w-0 flex-1 overflow-x-visible">
          <div className="flex w-max gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
            {TERMS.map((term) => {
              const isSelected =
                selectedTerm?.planYear === term.planYear &&
                selectedTerm?.planSemester === term.planSemester;

              return (
                <button
                  key={formatTerm(term)}
                  type="button"
                  onClick={() => setSelectedTerm(term)}
                  className={`h-8 min-w-14 rounded-md px-3 text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-white dark:text-zinc-300 dark:hover:bg-zinc-700"
                  }`}
                >
                  {formatTerm(term)}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="ml-auto">
        <Legend />
      </div>
    </div>
  );
}
