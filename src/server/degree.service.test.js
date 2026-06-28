import { beforeEach, describe, expect, it, vi } from "vitest";
import { MAX_USER_DEGREE_PRESETS } from "@/lib/constants";
import {
  addUserDegreePreset,
  getCompulsoryModuleIdsForPresets,
  removeUserDegreePreset,
} from "./degree.service";

const { prisma, tx } = vi.hoisted(() => {
  const tx = {
    degreePreset: {
      findUnique: vi.fn(),
    },
    userPreset: {
      findUnique: vi.fn(),
      count: vi.fn(),
      create: vi.fn(),
    },
  };

  return {
    tx,
    prisma: {
      degreePreset: {
        findUnique: vi.fn(),
      },
      degreePresetModule: {
        findMany: vi.fn(),
      },
      userPreset: {
        deleteMany: vi.fn(),
      },
      $transaction: vi.fn((callback) => callback(tx)),
    },
  };
});

vi.mock("@/lib/db", () => ({
  default: prisma,
}));

describe("addUserDegreePreset", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.each([0, 1])(
    "adds a new degree preset when the user has %i selected presets",
    async (selectedPresetCount) => {
      const degreePreset = { id: "degree-1", degreeCode: "computer-science" };
      const createdPreset = {
        userId: "user-1",
        degreePresetId: degreePreset.id,
      };

      tx.degreePreset.findUnique.mockResolvedValue(degreePreset);
      tx.userPreset.findUnique.mockResolvedValue(null);
      tx.userPreset.count.mockResolvedValue(selectedPresetCount);
      tx.userPreset.create.mockResolvedValue(createdPreset);

      await expect(
        addUserDegreePreset("user-1", "computer-science"),
      ).resolves.toEqual(createdPreset);

      expect(tx.userPreset.create).toHaveBeenCalledWith({
        data: {
          userId: "user-1",
          degreePresetId: degreePreset.id,
        },
      });
    },
  );

  it("allows re-adding an already selected degree preset", async () => {
    const degreePreset = { id: "degree-1", degreeCode: "computer-science" };
    const existingPreset = {
      userId: "user-1",
      degreePresetId: degreePreset.id,
    };

    tx.degreePreset.findUnique.mockResolvedValue(degreePreset);
    tx.userPreset.findUnique.mockResolvedValue(existingPreset);

    await expect(
      addUserDegreePreset("user-1", "computer-science"),
    ).resolves.toEqual(existingPreset);

    expect(tx.userPreset.count).not.toHaveBeenCalled();
    expect(tx.userPreset.create).not.toHaveBeenCalled();
  });

  it("rejects a new third degree preset", async () => {
    tx.degreePreset.findUnique.mockResolvedValue({
      id: "degree-3",
      degreeCode: "business-analytics",
    });
    tx.userPreset.findUnique.mockResolvedValue(null);
    tx.userPreset.count.mockResolvedValue(MAX_USER_DEGREE_PRESETS);

    await expect(
      addUserDegreePreset("user-1", "business-analytics"),
    ).rejects.toThrow("You can select up to 2 degree presets");

    expect(tx.userPreset.create).not.toHaveBeenCalled();
  });

  it("rejects an unknown degree preset", async () => {
    tx.degreePreset.findUnique.mockResolvedValue(null);

    await expect(
      addUserDegreePreset("user-1", "unknown-degree"),
    ).rejects.toThrow("Degree preset not found");

    expect(tx.userPreset.findUnique).not.toHaveBeenCalled();
    expect(tx.userPreset.count).not.toHaveBeenCalled();
    expect(tx.userPreset.create).not.toHaveBeenCalled();
  });
});

describe("removeUserDegreePreset", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("removes a selected degree preset for the user", async () => {
    prisma.degreePreset.findUnique.mockResolvedValue({
      id: "degree-1",
      degreeCode: "computer-science",
    });
    prisma.userPreset.deleteMany.mockResolvedValue({ count: 1 });

    await expect(
      removeUserDegreePreset("user-1", "computer-science"),
    ).resolves.toEqual({ count: 1 });

    expect(prisma.userPreset.deleteMany).toHaveBeenCalledWith({
      where: {
        userId: "user-1",
        degreePresetId: "degree-1",
      },
    });
  });

  it("succeeds when removing a valid degree preset that is not selected", async () => {
    prisma.degreePreset.findUnique.mockResolvedValue({
      id: "degree-2",
      degreeCode: "information-security",
    });
    prisma.userPreset.deleteMany.mockResolvedValue({ count: 0 });

    await expect(
      removeUserDegreePreset("user-1", "information-security"),
    ).resolves.toEqual({ count: 0 });
  });

  it("rejects an unknown degree preset", async () => {
    prisma.degreePreset.findUnique.mockResolvedValue(null);

    await expect(
      removeUserDegreePreset("user-1", "unknown-degree"),
    ).rejects.toThrow("Degree preset not found");

    expect(prisma.userPreset.deleteMany).not.toHaveBeenCalled();
  });
});

describe("getCompulsoryModuleIdsForPresets", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns the union of compulsory modules for selected degree presets", async () => {
    prisma.degreePresetModule.findMany.mockResolvedValue([
      { moduleId: "A" },
      { moduleId: "B" },
      { moduleId: "C" },
      { moduleId: "B" },
      { moduleId: "D" },
      { moduleId: "E" },
    ]);

    await expect(
      getCompulsoryModuleIdsForPresets([
        "computer-science-id",
        "information-security-id",
      ]),
    ).resolves.toEqual(["A", "B", "C", "D", "E"]);
  });

  it("returns only remaining selected degree modules after a degree is removed", async () => {
    prisma.degreePresetModule.findMany.mockResolvedValue([
      { moduleId: "A" },
      { moduleId: "B" },
      { moduleId: "C" },
    ]);

    await expect(
      getCompulsoryModuleIdsForPresets(["computer-science-id"]),
    ).resolves.toEqual(["A", "B", "C"]);
  });
});
