import { describe, expect, it } from "vitest";
import {
  getModuleGraphStatus,
  getModuleNodeBackground,
  MODULE_STATUS,
} from "./moduleStatus";

describe("getModuleGraphStatus", () => {
  it.each([
    {
      prereqFulfilled: false,
      planTime: 0,
      inPlanner: false,
      expected: MODULE_STATUS.notInGraph,
    },
    {
      prereqFulfilled: false,
      planTime: 0,
      inPlanner: true,
      expected: MODULE_STATUS.invalid,
    },
    {
      prereqFulfilled: false,
      planTime: 1,
      inPlanner: false,
      expected: MODULE_STATUS.notInGraph,
    },
    {
      prereqFulfilled: false,
      planTime: 1,
      inPlanner: true,
      expected: MODULE_STATUS.locked,
    },
    {
      prereqFulfilled: true,
      planTime: 0,
      inPlanner: false,
      expected: MODULE_STATUS.eligible,
    },
    {
      prereqFulfilled: true,
      planTime: 0,
      inPlanner: true,
      expected: MODULE_STATUS.completed,
    },
    {
      prereqFulfilled: true,
      planTime: 1,
      inPlanner: false,
      expected: MODULE_STATUS.eligible,
    },
    {
      prereqFulfilled: true,
      planTime: 1,
      inPlanner: true,
      expected: MODULE_STATUS.eligible,
    },
  ])(
    "returns $expected for prereq=$prereqFulfilled planTime=$planTime inPlanner=$inPlanner",
    ({ prereqFulfilled, planTime, inPlanner, expected }) => {
      expect(
        getModuleGraphStatus({ prereqFulfilled, planTime, inPlanner }),
      ).toBe(expected);
    },
  );

  it("marks a planned past module with missing prerequisites as invalid", () => {
    const status = getModuleGraphStatus({
      prereqFulfilled: false,
      planTime: 0,
      inPlanner: true,
    });

    expect(status).toBe(MODULE_STATUS.invalid);
    expect(getModuleNodeBackground(status)).toBe("#fde68a");
  });
});

describe("getModuleNodeBackground", () => {
  it.each([
    [MODULE_STATUS.locked, "#e5e7eb"],
    [MODULE_STATUS.eligible, "#93c5fd"],
    [MODULE_STATUS.completed, "#86efac"],
    [MODULE_STATUS.invalid, "#fde68a"],
  ])("maps status %s to %s", (status, color) => {
    expect(getModuleNodeBackground(status)).toBe(color);
  });
});
