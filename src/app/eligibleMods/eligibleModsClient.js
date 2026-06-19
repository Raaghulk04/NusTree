"use client";
import { ReactFlowProvider } from "@xyflow/react";
import Graph from "@/graph/graph";

export default function EligibleModClient({
  mods,
  userMods,
  compulsoryMods,
  eligibleMods,
  degreeMods,
}) {
  return (
    <div className="h-full w-full">
      <ReactFlowProvider>
        <Graph
          mods={mods}
          allMods={degreeMods}
          takenMods={eligibleMods}
          completedMods={userMods}
          compulsoryMods={compulsoryMods}
          initialMode="Simple"
        />
      </ReactFlowProvider>
    </div>
  );
}
