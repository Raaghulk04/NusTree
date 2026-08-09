export default function Legend() {
  const items = [
    { label: "Completed", color: "bg-emerald-400" },
    { label: "Eligible", color: "bg-blue-400" },
    { label: "Invalid", color: "bg-amber-300 ring-1 ring-amber-500" },
    { label: "Locked", color: "bg-zinc-600" },
  ];

  return (
    <div className="flex items-center gap-5 text-xs font-medium text-zinc-300 bg-[#1c202e]/80 backdrop-blur-md border border-white/[0.08] px-3.5 py-1.5 rounded-lg shadow-sm">
      <div className="flex items-center gap-3.5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${item.color}`} />
            <span className="text-zinc-200">{item.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-purple-400 leading-none">*</span>
          <span className="text-zinc-200">Compulsory</span>
        </div>
      </div>
      <div className="h-3.5 w-px bg-white/[0.08]" />
      <span className="text-[11px] text-zinc-400 italic">Click module to highlight prerequisites</span>
    </div>
  );
}
