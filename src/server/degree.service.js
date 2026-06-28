import prisma from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { MAX_USER_DEGREE_PRESETS } from "@/lib/constants";

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
  return prisma.$transaction(
    async (tx) => {
      const degreePreset = await tx.degreePreset.findUnique({
        where: { degreeCode },
      });

      if (!degreePreset) throw new Error("Degree preset not found");

      const existingPreset = await tx.userPreset.findUnique({
        where: {
          userId_degreePresetId: {
            userId,
            degreePresetId: degreePreset.id,
          },
        },
      });

      if (existingPreset) return existingPreset;

      const selectedPresetCount = await tx.userPreset.count({
        where: { userId },
      });

      if (selectedPresetCount >= MAX_USER_DEGREE_PRESETS) {
        throw new Error(
          `You can select up to ${MAX_USER_DEGREE_PRESETS} degree presets`,
        );
      }

      return tx.userPreset.create({
        data: {
          userId,
          degreePresetId: degreePreset.id,
        },
      });
    },
    { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
  );
}

export async function removeUserDegreePreset(userId, degreeCode) {
  const degreePreset = await prisma.degreePreset.findUnique({
    where: { degreeCode },
  });

  if (!degreePreset) throw new Error("Degree preset not found");

  return prisma.userPreset.deleteMany({
    where: {
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

  return [...new Set(compulsoryModules.map(({ moduleId }) => moduleId))];
}
