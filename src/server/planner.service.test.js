const { upsertMock } = vi.hoisted(() => ({
  upsertMock: vi.fn(),
}));

vi.mock("@/lib/db", () => ({
  default: {
    userPlanModule: {
      upsert: upsertMock,
    },
  },
}));

import { upsertUserPlannedModule } from "./planner.service";

const validPlannerInput = {
  userId: "user-1",
  moduleId: "CS1010S",
  planYear: "2",
  planSemester: "1",
};

describe("upsertUserPlannedModule", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    upsertMock.mockResolvedValue({ id: "planned-module-1" });
  });

  test("converts string plan year and semester values into numbers before writing", async () => {
    await upsertUserPlannedModule(validPlannerInput);

    expect(upsertMock).toHaveBeenCalledWith({
      where: {
        userId_moduleId: {
          userId: "user-1",
          moduleId: "CS1010S",
        },
      },
      update: {
        planYear: 2,
        planSemester: 1,
      },
      create: {
        userId: "user-1",
        moduleId: "CS1010S",
        planYear: 2,
        planSemester: 1,
        isPresetModule: false,
      },
    });
  });

  test("upserts using the compound userId_moduleId key", async () => {
    await upsertUserPlannedModule({
      userId: "user-2",
      moduleId: "MA1521",
      planYear: 1,
      planSemester: 2,
    });

    expect(upsertMock).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          userId_moduleId: {
            userId: "user-2",
            moduleId: "MA1521",
          },
        },
        update: {
          planYear: 1,
          planSemester: 2,
        },
        create: {
          userId: "user-2",
          moduleId: "MA1521",
          planYear: 1,
          planSemester: 2,
          isPresetModule: false,
        },
      }),
    );
  });

  test("accepts numeric inputs and numeric strings with surrounding whitespace", async () => {
    await upsertUserPlannedModule({
      ...validPlannerInput,
      planYear: " 3 ",
      planSemester: 2,
    });

    expect(upsertMock).toHaveBeenCalledWith(
      expect.objectContaining({
        update: {
          planYear: 3,
          planSemester: 2,
        },
      }),
    );
  });

  test.each([
    ["non-integer string", "1.5"],
    ["missing value", undefined],
    ["zero", "0"],
    ["negative value", "-1"],
    ["empty string", ""],
    ["non-numeric string", "abc"],
  ])("rejects invalid plan year: %s", async (_caseName, planYear) => {
    await expect(
      upsertUserPlannedModule({
        ...validPlannerInput,
        planYear,
      }),
    ).rejects.toThrow("Invalid plan year");

    expect(upsertMock).not.toHaveBeenCalled();
  });

  test.each([
    ["zero", "0"],
    ["outside allowed range", "3"],
    ["non-integer string", "1.5"],
    ["missing value", undefined],
    ["empty string", ""],
    ["non-numeric string", "abc"],
  ])("rejects invalid plan semester: %s", async (_caseName, planSemester) => {
    await expect(
      upsertUserPlannedModule({
        ...validPlannerInput,
        planSemester,
      }),
    ).rejects.toThrow("Invalid plan semester");

    expect(upsertMock).not.toHaveBeenCalled();
  });
});
