import prisma from "@/lib/db";

export async function getAllDegreePresets() {
  return prisma.degreePreset.findMany();
}

export async function getUserDegreePresets(userId) {
  return prisma.userPreset.findMany({
    where: { userId },
    include: {
      degreePreset: {
        include: {
          moduleLinks: {
            include: {
              module: true,
            },
          },
        },
      },
    },
  });
}

export async function addUserDegreePreset(userId, degreeCode) {
  const degreePreset = await prisma.degreePreset.findUnique({
    where: { degreeCode },
  });

  if (!degreePreset) throw new Error("Degree preset not found");

  return prisma.userPreset.upsert({
    where: {
      userId_degreePresetId: {
        userId,
        degreePresetId: degreePreset.id,
      },
    },
    update: {},
    create: {
      userId,
      degreePresetId: degreePreset.id,
    },
  });
}

export async function getUserDegreePresetSummaries(userId) {
  const userPresets = await prisma.userPreset.findMany({
    where: { userId },
    include: {
      degreePreset: true,
    },
  });

  return userPresets.map(({ degreePreset }) => degreePreset);
}

export async function getUserDegreePresetIds(userId) {
  const userPresets = await prisma.userPreset.findMany({
    where: { userId },
    select: {
      degreePresetId: true,
    },
  });

  return userPresets.map(({ degreePresetId }) => degreePresetId);
}

export async function getCompulsoryModuleIdsForPresets(degreePresetIds) {
  const compulsoryModules = await prisma.degreePresetModule.findMany({
    where: {
      degreePresetId: {
        in: degreePresetIds,
      },
    },
    select: {
      moduleId: true,
    },
  });

  return compulsoryModules.map(({ moduleId }) => moduleId);
}
