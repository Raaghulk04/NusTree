import Legend from "@/graph/legend";

const MODES = [
  { id: "eligible", label: "Eligible Mods" },
  { id: "All", label: "All Modules" },
  { id: "Simple", label: "Simple" },
];

export default function ModeToggle({ mode, setMode }) {
  return (
    <div
      style={{
        padding: "8px 16px",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        fontSize: "12px",
        background: "#a1abf8",
        borderBottom: "1px solid #738bbb",
        flexShrink: 0,
      }}
    >
      {MODES.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setMode(id)}
          style={{
            padding: "4px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: mode === id ? "bold" : "normal",
            background: mode === id ? "#4f46e5" : "#e0e7ff",
            color: mode === id ? "#fff" : "#1e1b4b",
          }}
        >
          {label}
        </button>
      ))}
      <div style={{ marginLeft: 12 }}>
        <Legend />
      </div>
    </div>
  );
}
