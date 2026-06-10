"use client";
import { ReactFlowProvider } from "@xyflow/react";
import Graph from "@/graph/graph";

export default function EligibleModClient({
  mods,
  degree,
  userMods,
  compulsoryMods,
}) {
  console.log("mods in eligibleModClient", mods);
  console.log("degree", degree);
  const completedMods = userMods;
  const completedModIds = completedMods.map((mod) => mod.moduleId);

  const isSatisfied = (tree, completedMods) => {
    if (!tree) return true; // no prereqs, always eligible
    if (typeof tree === "string") {
      const modCode = tree.split(":")[0];
      return completedMods.includes(modCode);
    }
    if (tree.or) return tree.or.some((t) => isSatisfied(t, completedMods));
    if (tree.and) return tree.and.every((t) => isSatisfied(t, completedMods));
    return true;
  };

  const inDegree = (dept) => degree.find((d) => d.degreeName == dept);
  let eligibleMods = mods.filter((module) =>
    isSatisfied(module.prereqTree, completedModIds),
  );
  eligibleMods = eligibleMods.filter((module) => inDegree(module.department));

  let degreeMods = mods.filter((module) => inDegree(module.department));

  const testMod = mods.filter(
    (module) => module.department == "Information Systems and Analytics",
  );
  console.log("testMod", testMod);

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
