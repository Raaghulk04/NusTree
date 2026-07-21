"use client";

import { extractMods } from "@/graph/layoutUtils";

const YEARS = [1, 2, 3, 4, 5];
const SEMESTERS = [1, 2];

const getTermIndex = (planYear, planSemester) =>
  Number(planYear) * 10 + Number(planSemester);

const getModuleCode = (treeValue) =>
  String(treeValue).split(":")[0].replace("%", "");

const isPrereqTreeSatisfiedBefore = (tree, plannedIndex, currentIndex) => {
  if (!tree) return true;
  if (typeof tree === "string") {
    const moduleId = getModuleCode(tree);
    const prereqIndex = plannedIndex.get(moduleId);
    return prereqIndex !== undefined && prereqIndex < currentIndex;
  }
  if (tree.or) {
    return tree.or.some((child) =>
      isPrereqTreeSatisfiedBefore(child, plannedIndex, currentIndex),
    );
  }
  if (tree.and) {
    return tree.and.every((child) =>
      isPrereqTreeSatisfiedBefore(child, plannedIndex, currentIndex),
    );
  }
  return true;
};

const getMissingPrereqs = (module, plannedIndex, currentIndex) => {
  if (!module?.prereqTree) return [];

  if (isPrereqTreeSatisfiedBefore(module.prereqTree, plannedIndex, currentIndex)) {
    return [];
  }

  return [...new Set(extractMods(module.prereqTree))].filter((moduleId) => {
    const prereqIndex = plannedIndex.get(moduleId);
    return prereqIndex === undefined || prereqIndex >= currentIndex;
  });
};

export default function SemesterTimeline({
  plannedModules,
  mods,
  showTitle = true,
  className = "mt-6",
  onRemoveModule,
  removingModuleId,
}) {
  if (!Array.isArray(plannedModules) || plannedModules.length === 0) return null;

  const modMap = new Map((mods || []).map((mod) => [mod.id, mod]));
  const plannedIndex = new Map(
    plannedModules
      .filter((mod) => mod.planYear !== null && mod.planSemester !== null)
      .map((mod) => [
        mod.moduleId,
        getTermIndex(mod.planYear, mod.planSemester),
      ]),
  );

  const modulesByTerm = new Map();
  plannedModules.forEach((mod) => {
    if (mod.planYear === null || mod.planSemester === null) return;
    const key = `Y${mod.planYear}S${mod.planSemester}`;
    modulesByTerm.set(key, [...(modulesByTerm.get(key) || []), mod]);
  });
  const unscheduledModules = plannedModules.filter(
    (mod) => mod.planYear === null || mod.planSemester === null,
  );

  const renderModuleCard = (plannedMod, { showWarning = true } = {}) => {
    const moduleInfo = modMap.get(plannedMod.moduleId);
    const missing = showWarning
      ? getMissingPrereqs(
          moduleInfo,
          plannedIndex,
          getTermIndex(plannedMod.planYear, plannedMod.planSemester),
        )
      : [];
    const hasWarning = missing.length > 0;

    return (
      <div
        key={plannedMod.id}
        className={`rounded-md border p-2 text-sm ${
          hasWarning
            ? "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100"
            : "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-100"
        }`}
      >
        <div className="font-semibold">{plannedMod.moduleId}</div>
        {moduleInfo?.title && (
          <div className="mt-1 line-clamp-2 text-xs opacity-75">
            {moduleInfo.title}
          </div>
        )}
        {plannedMod.isPresetModule && (
          <div className="mt-1 text-xs opacity-70">Preset</div>
        )}
        {hasWarning && (
          <div className="mt-2 text-xs font-medium">
            Missing earlier: {missing.join(", ")}
          </div>
        )}
        {!showWarning && onRemoveModule && (
          <button
            type="button"
            onClick={() => onRemoveModule(plannedMod.moduleId)}
            disabled={removingModuleId === plannedMod.moduleId}
            className="mt-2 text-xs font-medium underline underline-offset-2 disabled:opacity-60"
          >
            {removingModuleId === plannedMod.moduleId ? "Removing..." : "Remove"}
          </button>
        )}
      </div>
    );
  };

  return (
    <section className={className}>
      {showTitle && (
        <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Semester Timeline
        </h3>
      )}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {YEARS.flatMap((year) =>
          SEMESTERS.map((semester) => {
            const key = `Y${year}S${semester}`;
            const termModules = modulesByTerm.get(key) || [];

            return (
              <div
                key={key}
                className="min-h-36 rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-3 text-sm font-bold text-zinc-700 dark:text-zinc-200">
                  {key}
                </div>
                <div className="space-y-2">
                  {termModules.length === 0 ? (
                    <div className="text-sm text-zinc-400">No modules</div>
                  ) : (
                    termModules.map((plannedMod) => renderModuleCard(plannedMod))
                  )}
                </div>
              </div>
            );
          }),
        )}
      </div>
      {unscheduledModules.length > 0 && (
        <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-1 text-sm font-bold text-zinc-700 dark:text-zinc-200">
            Unscheduled
          </div>
          <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-400">
            Add a module to a term from the tracker to schedule it.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {unscheduledModules.map((plannedMod) =>
              renderModuleCard(plannedMod, { showWarning: false }),
            )}
          </div>
        </div>
      )}
    </section>
  );
}
