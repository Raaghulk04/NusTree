"use client";
import { useModuleStore } from "../../store/useModuleStore";
import Graph from "@/graph/graph";

export default function EligibleModClient({
  mods,
  degree,
  userMods,
  compulsoryMods,
}) {
  const completedMods = userMods;
  const dsa = mods.find((module) => module.id === "CS2040S");

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

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const inDegree = (dept) => degree.find((d) => d.degreeName == dept);
  let eligibleMods = mods.filter((module) =>
    isSatisfied(module.prereqTree, completedModIds),
  );
  eligibleMods = eligibleMods.filter((module) => inDegree(module.department));

  let degreeMods = mods.filter((module) => inDegree(module.department));
  console.log("eligibleMods", eligibleMods);
  return (
    <div>
      <Graph
        allMods={degreeMods}
        takenMods={eligibleMods}
        completedMods={userMods}
        compulsoryMods={compulsoryMods}
      />
    </div>
  );
}
