export default function Legend() {
  const label = ["🟢 Completed", "🔵 Eligible", "⬜ Locked"];

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        fontSize: "12px",
        alignItems: "center",
      }}
    >
      <span>{label}</span>
      <span>Click on Module to see it's prerequisites</span>
    </div>
  );
}
