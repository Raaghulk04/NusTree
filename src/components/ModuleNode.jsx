// src/components/ModuleNode.jsx
export default function ModuleNode({ data }) {
  return (
    <div className={`mod-node ${data.status}`}>
      <span>{data.label}</span>
      <div className="dot" />
    </div>
  );
}
