"use server";
import prisma from "@/lib/db";

const MODULE_CODE_REGEX = /[A-Z]{2,3}\d{4}[A-Z]*/g;

function normalizePlanTerm(planYear, planSemester) {
  const normalizedPlanYear = Number(planYear);
  const normalizedPlanSemester = Number(planSemester);

  if (!Number.isInteger(normalizedPlanYear) || normalizedPlanYear <= 0) {
    throw new Error("Invalid plan year");
  }

  if (
    !Number.isInteger(normalizedPlanSemester) ||
    ![1, 2].includes(normalizedPlanSemester)
  ) {
    throw new Error("Invalid plan semester");
  }

  return {
    planYear: normalizedPlanYear,
    planSemester: normalizedPlanSemester,
  };
}

export async function upsertUserAddModule({
  userId,
  moduleId,
  planYear,
  planSemester,
}) {
  const normalisedTerm = normalizePlanTerm(planYear, planSemester);

  return prisma.userAddModule.upsert({
    where: {
      userId_moduleId: {
        userId,
        moduleId,
      },
    },
    update: normalisedTerm,
    create: {
      userId,
      moduleId,
      ...normalisedTerm,
      isPresetModule: false,
    },
  });
}

export async function getUserAddModules(userId) {
  return prisma.userAddModule.findMany({
    where: { userId },
    orderBy: [
      { planYear: "asc" },
      { planSemester: "asc" },
      { moduleId: "asc" },
    ],
  });
}

export async function getUserPlannedModules(userId) {
  const dbMods = await prisma.userPlanModule.findMany({
    where: { userId },
    orderBy: [
      { planYear: "asc" },
      { planSemester: "asc" },
      { moduleId: "asc" },
    ],
  });

  const defaultMods = [{
    userId,
    moduleId: "MA1301",
    planYear: 0,
    planSemester: 1,
    isPresetModule: false,
  }];

  return [...defaultMods, ...dbMods]
}

export async function upsertUserPlannedModule({
  userId,
  moduleId,
  planYear,
  planSemester,
}) {
  const normalizedTerm = normalizePlanTerm(planYear, planSemester);

  return prisma.userPlanModule.upsert({
    where: {
      userId_moduleId: {
        userId,
        moduleId,
      },
    },
    update: normalizedTerm,
    create: {
      userId,
      moduleId,
      ...normalizedTerm,
      isPresetModule: false,
    },
  });
}

export async function removeUserPlannedModule(userId, moduleId) {
  return prisma.userPlanModule.deleteMany({
    where: {
      userId,
      moduleId,
    },
  });
}

export async function getUserPrecludedModuleIds(userId) {
  const plannedModules = await prisma.userPlanModule.findMany({
    where: { userId },
    select: {
      module: {
        select: {
          preclusion: true,
        },
      },
    },
  });

  return plannedModules.flatMap(({ module }) => {
    if (!module.preclusion) return [];
    return module.preclusion.match(MODULE_CODE_REGEX) || [];
  });
}
