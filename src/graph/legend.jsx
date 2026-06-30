export default function Legend() {
  const items = [
    { label: "Completed", color: "bg-emerald-400" },
    { label: "Eligible", color: "bg-blue-400" },
    { label: "Locked", color: "bg-zinc-200 dark:bg-zinc-700" },
  ];

  return (
    <div className="flex items-center gap-6 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
      <div className="flex items-center gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
            <span>{item.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <div className="flex h-3.5 w-3.5 items-center justify-center text-2xl leading-none font-bold text-violet-400 translate-y-0.75">
            *
          </div>
          <span>Compulsory</span>
        </div>
      </div>
      <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
      <span className="italic">Click a module to see prerequisites</span>
    </div>
  );
}
