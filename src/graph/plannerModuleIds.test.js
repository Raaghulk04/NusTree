import { describe, expect, it } from "vitest";
import { getPlannerModuleId } from "./plannerModuleIds";

describe("getPlannerModuleId", () => {
  it("uses moduleId for persisted user planner rows", () => {
    expect(getPlannerModuleId({ id: "row-1", moduleId: "D" })).toBe("D");
  });

  it("uses id for module objects added during the current graph session", () => {
    expect(getPlannerModuleId({ id: "D" })).toBe("D");
  });
});
