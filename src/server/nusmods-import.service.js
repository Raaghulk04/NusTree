import prisma from "@/lib/db";

const NORMAL_SEMESTERS = new Set([1, 2]);
const ACADEMIC_YEAR_PATTERN = /^(\d{4})\/(\d{4})$/;

function parseImportJson(jsonText) {
  try {
    return JSON.parse(jsonText);
  } catch {
    throw new Error("The selected file is not valid JSON");
  }
}

function getSourceOrder(entry, fallbackOrder) {
  const numericId = Number(entry.id);
  return Number.isFinite(numericId) ? numericId : fallbackOrder;
}

function getAcademicYearStart(academicYear) {
  if (typeof academicYear !== "string") return null;

  const match = academicYear.match(ACADEMIC_YEAR_PATTERN);
  if (!match) return null;

  const startYear = Number(match[1]);
  const endYear = Number(match[2]);
  return endYear === startYear + 1 ? startYear : null;
}

function getPlannerTerm(minYearStart, moduleYear, semester) {
  const moduleYearStart = getAcademicYearStart(moduleYear);
  if (
    minYearStart === null ||
    moduleYearStart === null ||
    !NORMAL_SEMESTERS.has(semester)
  ) {
    return { planYear: null, planSemester: null };
  }

  const planYear = moduleYearStart - minYearStart + 1;
  if (planYear < 1 || planYear > 5) {
    return { planYear: null, planSemester: null };
  }

  return { planYear, planSemester: semester };
}

export function parseNusmodsPlan(jsonText) {
  if (typeof jsonText !== "string" || !jsonText.trim()) {
    throw new Error("Select a NUSMods JSON file to import");
  }

  const parsed = parseImportJson(jsonText);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("The NUSMods file must contain an object");
  }
  if (!parsed.modules || typeof parsed.modules !== "object" || Array.isArray(parsed.modules)) {
    throw new Error("The NUSMods file must contain a modules object");
  }

  const minYearStart = getAcademicYearStart(parsed.minYear);
  const latestByModuleCode = new Map();
  const invalidEntries = [];

  Object.values(parsed.modules).forEach((entry, fallbackOrder) => {
    if (!entry || typeof entry !== "object" || typeof entry.moduleCode !== "string") {
      invalidEntries.push(`entry ${fallbackOrder + 1}`);
      return;
    }

    const moduleId = entry.moduleCode.trim().toUpperCase();
    if (!moduleId) {
      invalidEntries.push(`entry ${fallbackOrder + 1}`);
      return;
    }

    const semester = Number(entry.semester);
    const term = getPlannerTerm(minYearStart, entry.year, semester);
    const candidate = {
      moduleId,
      ...term,
      sourceOrder: getSourceOrder(entry, fallbackOrder),
    };
    const current = latestByModuleCode.get(moduleId);

    if (!current || candidate.sourceOrder >= current.sourceOrder) {
      latestByModuleCode.set(moduleId, candidate);
    }
  });

  const candidates = [...latestByModuleCode.values()];
  if (candidates.length === 0) {
    throw new Error("The NUSMods file does not contain any importable module codes");
  }

  return {
    candidates,
    invalidEntries,
    duplicateModuleCodes: Object.values(parsed.modules)
      .filter((entry) => entry && typeof entry.moduleCode === "string")
      .map((entry) => entry.moduleCode.trim().toUpperCase())
      .filter((moduleId, index, moduleIds) => moduleIds.indexOf(moduleId) !== index)
      .filter((moduleId, index, moduleIds) => moduleIds.indexOf(moduleId) === index),
  };
}

export function buildNusmodsImportPreview(parsedPlan, availableModuleIds) {
  const availableIds = new Set(availableModuleIds);
  const plannedModules = parsedPlan.candidates.filter((module) =>
    availableIds.has(module.moduleId),
  );
  const unknownModuleCodes = parsedPlan.candidates
    .filter((module) => !availableIds.has(module.moduleId))
    .map((module) => module.moduleId);

  return {
    plannedModules: plannedModules.map(({ sourceOrder, ...module }) => module),
    summary: {
      scheduledCount: plannedModules.filter((module) => module.planYear !== null)
        .length,
      unscheduledCount: plannedModules.filter((module) => module.planYear === null)
        .length,
      unknownModuleCodes,
      duplicateModuleCodes: parsedPlan.duplicateModuleCodes,
      invalidEntries: parsedPlan.invalidEntries,
    },
  };
}

async function buildImportPreview(db, jsonText) {
  const parsedPlan = parseNusmodsPlan(jsonText);
  const moduleIds = parsedPlan.candidates.map((module) => module.moduleId);
  const modules = await db.module.findMany({
    where: { id: { in: moduleIds } },
    select: { id: true },
  });

  return buildNusmodsImportPreview(
    parsedPlan,
    modules.map((module) => module.id),
  );
}

export async function previewNusmodsPlanImport(jsonText) {
  return buildImportPreview(prisma, jsonText);
}

export async function replaceUserPlanWithNusmodsImport(userId, jsonText) {
  return prisma.$transaction(async (tx) => {
    const preview = await buildImportPreview(tx, jsonText);

    if (preview.plannedModules.length === 0) {
      throw new Error("No recognized modules were found, so your planner was not changed");
    }

    await tx.userPlanModule.deleteMany({ where: { userId } });
    await tx.userPlanModule.createMany({
      data: preview.plannedModules.map((module) => ({
        userId,
        ...module,
        isPresetModule: false,
      })),
    });

    return preview;
  });
}
