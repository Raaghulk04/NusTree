import { beforeEach, describe, expect, test, vi } from "vitest";

const { prismaMock, transactionMock, findManyMock, deleteManyMock, createManyMock } =
  vi.hoisted(() => {
    const findMany = vi.fn();
    const deleteMany = vi.fn();
    const createMany = vi.fn();
    const transaction = vi.fn();

    return {
      findManyMock: findMany,
      deleteManyMock: deleteMany,
      createManyMock: createMany,
      transactionMock: transaction,
      prismaMock: {
        module: { findMany },
        userPlanModule: { deleteMany, createMany },
        $transaction: transaction,
      },
    };
  });

vi.mock("@/lib/db", () => ({ default: prismaMock }));

import {
  buildNusmodsImportPreview,
  parseNusmodsPlan,
  replaceUserPlanWithNusmodsImport,
} from "./nusmods-import.service";

const importJson = JSON.stringify({
  minYear: "2025/2026",
  maxYear: "2028/2029",
  modules: {
    0: { id: "0", year: "2025/2026", semester: 1, moduleCode: "CS1101S" },
    1: { id: "1", year: "2028/2029", semester: 2, moduleCode: "MA1521" },
    2: { id: "2", year: "3000", semester: -2, moduleCode: "CS3230" },
  },
});

describe("parseNusmodsPlan", () => {
  test("maps module academic years and semesters from minYear", () => {
    const plan = parseNusmodsPlan(importJson);

    expect(plan.candidates).toEqual([
      { moduleId: "CS1101S", planYear: 1, planSemester: 1, sourceOrder: 0 },
      { moduleId: "MA1521", planYear: 4, planSemester: 2, sourceOrder: 1 },
      { moduleId: "CS3230", planYear: null, planSemester: null, sourceOrder: 2 },
    ]);
  });

  test("places malformed academic years and unsupported planner years in Unscheduled", () => {
    const plan = parseNusmodsPlan(
      JSON.stringify({
        minYear: "2025/2026",
        modules: {
          malformed: { id: "1", year: "3000", semester: 1, moduleCode: "CS3230" },
          beyondYearFive: {
            id: "2",
            year: "2030/2031",
            semester: 1,
            moduleCode: "CS4224",
          },
          specialSemester: {
            id: "3",
            year: "2025/2026",
            semester: -2,
            moduleCode: "MA1301X",
          },
        },
      }),
    );

    expect(plan.candidates).toEqual([
      { moduleId: "CS3230", planYear: null, planSemester: null, sourceOrder: 1 },
      { moduleId: "CS4224", planYear: null, planSemester: null, sourceOrder: 2 },
      { moduleId: "MA1301X", planYear: null, planSemester: null, sourceOrder: 3 },
    ]);
  });

  test("places normal terms in Unscheduled when minYear is malformed", () => {
    const plan = parseNusmodsPlan(
      JSON.stringify({
        minYear: "not-an-academic-year",
        modules: {
          module: {
            id: "1",
            year: "2025/2026",
            semester: 1,
            moduleCode: "CS1101S",
          },
        },
      }),
    );

    expect(plan.candidates).toEqual([
      { moduleId: "CS1101S", planYear: null, planSemester: null, sourceOrder: 1 },
    ]);
  });

  test("keeps the latest source entry for duplicate module codes", () => {
    const plan = parseNusmodsPlan(
      JSON.stringify({
        minYear: "2025/2026",
        modules: {
          first: {
            id: "1",
            year: "2025/2026",
            semester: 1,
            moduleCode: "CS2109S",
          },
          last: {
            id: "9",
            year: "2026/2027",
            semester: 2,
            moduleCode: "CS2109S",
          },
        },
      }),
    );

    expect(plan.candidates).toEqual([
      { moduleId: "CS2109S", planYear: 2, planSemester: 2, sourceOrder: 9 },
    ]);
    expect(plan.duplicateModuleCodes).toEqual(["CS2109S"]);
  });

  test("reports unavailable module codes without adding them to the import", () => {
    const preview = buildNusmodsImportPreview(
      parseNusmodsPlan(importJson),
      ["CS1101S", "CS3230"],
    );

    expect(preview.plannedModules).toEqual([
      { moduleId: "CS1101S", planYear: 1, planSemester: 1 },
      { moduleId: "CS3230", planYear: null, planSemester: null },
    ]);
    expect(preview.summary.unknownModuleCodes).toEqual(["MA1521"]);
  });
});

describe("replaceUserPlanWithNusmodsImport", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    transactionMock.mockImplementation((callback) =>
      callback({
        module: { findMany: findManyMock },
        userPlanModule: {
          deleteMany: deleteManyMock,
          createMany: createManyMock,
        },
      }),
    );
  });

  test("replaces planner rows with recognized modules in one transaction", async () => {
    findManyMock.mockResolvedValue([{ id: "CS1101S" }, { id: "CS3230" }]);

    await replaceUserPlanWithNusmodsImport("user-1", importJson);

    expect(deleteManyMock).toHaveBeenCalledWith({ where: { userId: "user-1" } });
    expect(createManyMock).toHaveBeenCalledWith({
      data: [
        {
          userId: "user-1",
          moduleId: "CS1101S",
          planYear: 1,
          planSemester: 1,
          isPresetModule: false,
        },
        {
          userId: "user-1",
          moduleId: "CS3230",
          planYear: null,
          planSemester: null,
          isPresetModule: false,
        },
      ],
    });
  });

  test("does not clear the planner when no module codes are recognized", async () => {
    findManyMock.mockResolvedValue([]);

    await expect(
      replaceUserPlanWithNusmodsImport("user-1", importJson),
    ).rejects.toThrow("No recognized modules");

    expect(deleteManyMock).not.toHaveBeenCalled();
  });
});
