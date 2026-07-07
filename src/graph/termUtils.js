export const TERMS = Array.from({ length: 5 }, (_, yearIndex) =>
  [1, 2].map((semester) => ({
    planYear: yearIndex + 1,
    planSemester: semester,
  })),
).flat();

export const DEFAULT_TERM = { planYear: 1, planSemester: 1 };

export const getTermIndex = (planYear, planSemester) =>
  Number(planYear) * 10 + Number(planSemester);

export const formatTerm = ({ planYear, planSemester }) =>
  `Y${planYear}S${planSemester}`;

export function getEarliestPlannerTerm(plannedModules) {
  if (!Array.isArray(plannedModules) || plannedModules.length === 0) {
    return DEFAULT_TERM;
  }

  return plannedModules.reduce(
    (earliest, module) => {
      const moduleIndex = getTermIndex(module.planYear, module.planSemester);
      const earliestIndex = getTermIndex(
        earliest.planYear,
        earliest.planSemester,
      );

      if (moduleIndex < earliestIndex) {
        return {
          planYear: Number(module.planYear),
          planSemester: Number(module.planSemester),
        };
      }

      return earliest;
    },
    {
      planYear: Number(plannedModules[0].planYear),
      planSemester: Number(plannedModules[0].planSemester),
    },
  );
}

const getModuleCode = (treeValue) =>
  String(treeValue).split(":")[0].replace("%", "");

export function isPrereqTreeSatisfiedBy(tree, completedIds) {
  if (!tree) return true;

  if (typeof tree === "string") {
    return completedIds.has(getModuleCode(tree));
  }

  if (tree.or) {
    return tree.or.some((child) => isPrereqTreeSatisfiedBy(child, completedIds));
  }

  if (tree.and) {
    return tree.and.every((child) =>
      isPrereqTreeSatisfiedBy(child, completedIds),
    );
  }

  return true;
}

export function classifyPlannerModulesByTerm({
  plannedModules,
  selectedTerm,
  modMap,
}) {
  const completedIds = new Set();
  const takenIds = new Set();
  const warningIds = new Set();
  const selectedIndex = getTermIndex(
    selectedTerm.planYear,
    selectedTerm.planSemester,
  );

  const sortedModules = [...(plannedModules || [])].sort((a, b) => {
    const termDiff =
      getTermIndex(a.planYear, a.planSemester) -
      getTermIndex(b.planYear, b.planSemester);
    return termDiff || String(a.moduleId).localeCompare(String(b.moduleId));
  });

  const modulesByPastTerm = new Map();

  sortedModules.forEach((plannedModule) => {
    const moduleId = plannedModule.moduleId;
    const plannedIndex = getTermIndex(
      plannedModule.planYear,
      plannedModule.planSemester,
    );

    if (plannedIndex >= selectedIndex) {
      takenIds.add(moduleId);
      return;
    }

    modulesByPastTerm.set(plannedIndex, [
      ...(modulesByPastTerm.get(plannedIndex) || []),
      plannedModule,
    ]);
  });

  [...modulesByPastTerm.entries()]
    .sort(([termA], [termB]) => termA - termB)
    .forEach(([, termModules]) => {
      const completedThisTerm = [];

      termModules.forEach((plannedModule) => {
        const moduleInfo = modMap.get(plannedModule.moduleId);
        if (isPrereqTreeSatisfiedBy(moduleInfo?.prereqTree, completedIds)) {
          completedThisTerm.push(plannedModule.moduleId);
        } else {
          warningIds.add(plannedModule.moduleId);
        }
      });

      completedThisTerm.forEach((moduleId) => completedIds.add(moduleId));
    });

  return {
    completedIds,
    takenIds,
    warningIds,
  };
}
