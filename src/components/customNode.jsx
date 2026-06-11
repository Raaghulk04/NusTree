import { useCallback, memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { Target } from "lucide-react";

export function CustomNode({ data }) {
  return (
    <div>
      <Handle type="target" position={Position.Top} />

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
