import { beforeEach, describe, expect, it, vi } from "vitest";
import { MAX_USER_DEGREE_PRESETS } from "@/lib/constants";
import { addUserDegreePreset } from "./degree.service";

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
