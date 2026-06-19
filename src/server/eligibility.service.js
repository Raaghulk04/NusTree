import { getModules } from "@/server/module.service";
import {
  getCompulsoryModuleIdsForPresets,
  getUserDegreePresetIds,
  getUserDegreePresetSummaries,
} from "@/server/degree.service";
import { getUserPlannedModules } from "@/server/planner.service";

export function isPrereqTreeSatisfied(tree, completedModuleIds) {
  if (!tree) return true;

  if (typeof tree === "string") {
    const moduleId = tree.split(":")[0];
    return completedModuleIds.includes(moduleId);
  }

  if (tree.or) {
    return tree.or.some((child) =>
      isPrereqTreeSatisfied(child, completedModuleIds),
    );
  }

  if (tree.and) {
    return tree.and.every((child) =>
      isPrereqTreeSatisfied(child, completedModuleIds),
    );
  }

  return true;
}

export function getEligibleModulesForDegrees({ modules, degrees, userModules }) {
  const completedModuleIds = userModules.map((module) => module.moduleId);
  const degreeNames = new Set(degrees.map((degree) => degree.degreeName));

  return modules
    .filter((module) =>
      isPrereqTreeSatisfied(module.prereqTree, completedModuleIds),
    )
    .filter((module) => degreeNames.has(module.department));
}

export function getModulesForDegrees(modules, degrees) {
  const degreeNames = new Set(degrees.map((degree) => degree.degreeName));
  return modules.filter((module) => degreeNames.has(module.department));
}

export async function getEligibleModulesPageData(userId) {
  const modules = await getModules();
  const degreePresetIds = await getUserDegreePresetIds(userId);
  const degrees = await getUserDegreePresetSummaries(userId);
  const userModules = await getUserPlannedModules(userId);
  const compulsoryModuleIds =
    await getCompulsoryModuleIdsForPresets(degreePresetIds);

  return {
    modules,
    degrees,
    userModules,
    compulsoryModuleIds,
    eligibleModules: getEligibleModulesForDegrees({
      modules,
      degrees,
      userModules,
    }),
    degreeModules: getModulesForDegrees(modules, degrees),
  };
}
