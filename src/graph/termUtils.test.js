import { describe, expect, it } from "vitest";
import {
  classifyPlannerModulesByTerm,
  getEarliestPlannerTerm,
} from "./termUtils";

const moduleMap = (modules) => new Map(modules.map((module) => [module.id, module]));

const planned = (moduleId, planYear, planSemester) => ({
  moduleId,
  planYear,
  planSemester,
});

describe("getEarliestPlannerTerm", () => {
  it("returns Y1S1 when there are no planned modules", () => {
    expect(getEarliestPlannerTerm([])).toEqual({
      planYear: 1,
      planSemester: 1,
    });
  });

  it("returns the earliest planned module term", () => {
    expect(
      getEarliestPlannerTerm([
        planned("CS2040", 2, 1),
        planned("CS1010", 1, 2),
      ]),
    ).toEqual({
      planYear: 1,
      planSemester: 2,
    });
  });
});

describe("classifyPlannerModulesByTerm", () => {
  it("marks every planned module as taken at Y1S1", () => {
    const result = classifyPlannerModulesByTerm({
      plannedModules: [planned("CS1010", 1, 1), planned("CS2040", 2, 1)],
      selectedTerm: { planYear: 1, planSemester: 1 },
      modMap: moduleMap([
        { id: "CS1010", prereqTree: null },
        { id: "CS2040", prereqTree: "CS1010:D" },
      ]),
    });

    expect(result.completedIds).toEqual(new Set());
    expect(result.warningIds).toEqual(new Set());
    expect(result.takenIds).toEqual(new Set(["CS1010", "CS2040"]));
  });

  it("marks earlier modules with satisfied prerequisites as completed", () => {
    const result = classifyPlannerModulesByTerm({
      plannedModules: [planned("CS1010", 1, 1), planned("CS2040", 1, 2)],
      selectedTerm: { planYear: 2, planSemester: 1 },
      modMap: moduleMap([
        { id: "CS1010", prereqTree: null },
        { id: "CS2040", prereqTree: "CS1010:D" },
      ]),
    });

    expect(result.completedIds).toEqual(new Set(["CS1010", "CS2040"]));
    expect(result.warningIds).toEqual(new Set());
    expect(result.takenIds).toEqual(new Set());
  });

  it("marks earlier modules with missing prerequisites as warnings", () => {
    const result = classifyPlannerModulesByTerm({
      plannedModules: [planned("CS2040", 1, 1)],
      selectedTerm: { planYear: 1, planSemester: 2 },
      modMap: moduleMap([{ id: "CS2040", prereqTree: "CS1010:D" }]),
    });

    expect(result.completedIds).toEqual(new Set());
    expect(result.warningIds).toEqual(new Set(["CS2040"]));
    expect(result.takenIds).toEqual(new Set());
  });

  it("does not let warning modules satisfy downstream prerequisites", () => {
    const result = classifyPlannerModulesByTerm({
      plannedModules: [planned("CS2040", 1, 1), planned("CS2100", 1, 2)],
      selectedTerm: { planYear: 2, planSemester: 1 },
      modMap: moduleMap([
        { id: "CS2040", prereqTree: "CS1010:D" },
        { id: "CS2100", prereqTree: "CS2040:D" },
      ]),
    });

    expect(result.completedIds).toEqual(new Set());
    expect(result.warningIds).toEqual(new Set(["CS2040", "CS2100"]));
    expect(result.takenIds).toEqual(new Set());
  });

  it("does not satisfy prerequisites from modules planned in the same term", () => {
    const result = classifyPlannerModulesByTerm({
      plannedModules: [planned("CS1010", 1, 1), planned("CS2040", 1, 1)],
      selectedTerm: { planYear: 1, planSemester: 2 },
      modMap: moduleMap([
        { id: "CS1010", prereqTree: null },
        { id: "CS2040", prereqTree: "CS1010:D" },
      ]),
    });

    expect(result.completedIds).toEqual(new Set(["CS1010"]));
    expect(result.warningIds).toEqual(new Set(["CS2040"]));
    expect(result.takenIds).toEqual(new Set());
  });

  it("supports OR and AND prerequisite trees", () => {
    const result = classifyPlannerModulesByTerm({
      plannedModules: [
        planned("CS1010", 1, 1),
        planned("MA1521", 1, 1),
        planned("CS2030", 1, 2),
      ],
      selectedTerm: { planYear: 2, planSemester: 1 },
      modMap: moduleMap([
        { id: "CS1010", prereqTree: null },
        { id: "MA1521", prereqTree: null },
        {
          id: "CS2030",
          prereqTree: {
            and: ["MA1521:D", { or: ["CS1010:D", "CS1101S:D"] }],
          },
        },
      ]),
    });

    expect(result.completedIds).toEqual(
      new Set(["CS1010", "MA1521", "CS2030"]),
    );
    expect(result.warningIds).toEqual(new Set());
    expect(result.takenIds).toEqual(new Set());
  });
});
