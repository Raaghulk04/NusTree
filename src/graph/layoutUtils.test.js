import { describe, expect, it } from "vitest";
import {
  computeNodePositions,
  extractMods,
  getModuleNeighborhood,
} from "./layoutUtils";

describe("computeNodePositions", () => {
  it("returns a position for a single module", () => {
    const mods = [{ id: "CS1010", prereqTree: null }];

    const positions = computeNodePositions(mods);

    expect(positions.CS1010).toEqual(
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
      }),
    );
  });

  it("places prerequisites above their dependents", () => {
    const mods = [
      { id: "CS1010", prereqTree: null },
      { id: "CS2030", prereqTree: "CS1010:D" },
    ];

    const positions = computeNodePositions(mods);

    expect(positions.CS1010.y).toBeLessThan(positions.CS2030.y);
  });

  it("places multiple prerequisites above the target module", () => {
    const mods = [
      { id: "CS1010", prereqTree: null },
      { id: "MA1521", prereqTree: null },
      {
        id: "CS2040",
        prereqTree: { and: ["CS1010:D", "MA1521:D"] },
      },
    ];

    const positions = computeNodePositions(mods);

    expect(positions.CS1010.y).toBeLessThan(positions.CS2040.y);
    expect(positions.MA1521.y).toBeLessThan(positions.CS2040.y);
  });

  it("re-centers the anchor node to x = 0", () => {
    const mods = [
      { id: "CS1010", prereqTree: null },
      { id: "CS2030", prereqTree: "CS1010:D" },
    ];

    const positions = computeNodePositions(mods, { anchorId: "CS2030" });

    expect(positions.CS2030.x).toBe(0);
  });

  it("ignores prerequisites that are not in the provided module list", () => {
    const mods = [{ id: "CS2040", prereqTree: "CS9999:D" }];

    const positions = computeNodePositions(mods);

    expect(positions.CS2040).toEqual(
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
      }),
    );
  });

  it("ignores self dependencies", () => {
    const mods = [{ id: "CS2040", prereqTree: "CS2040:D" }];

    const positions = computeNodePositions(mods);

    expect(positions.CS2040).toEqual(
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
      }),
    );
  });

  it("wraps large rows into multiple sublayers", () => {
    const mods = Array.from({ length: 8 }, (_, index) => ({
      id: `CS10${index}`,
      prereqTree: null,
    }));

    const positions = computeNodePositions(mods);
    const yValues = [...new Set(Object.values(positions).map((pos) => pos.y))];

    expect(yValues.length).toBeGreaterThan(1);
  });
});

describe("layoutUtil helper functions", () => {
  it("extractMods flattens nested prerequisite trees and normalizes ids", () => {
    const tree = {
      and: [
        "CS1010:D",
        {
          or: ["MA1521:D", "CS2040%"],
        },
      ],
    };

    expect(extractMods(tree)).toEqual(["CS1010", "MA1521", "CS2040"]);
  });

  it("getModuleNeighborhood includes the selected module, its prerequisites, and direct dependents", () => {
    const mods = [
      { id: "CS1010", prereqTree: null },
      { id: "CS2030", prereqTree: "CS1010:D" },
      { id: "CS2040", prereqTree: "CS2030:D" },
      { id: "CS2100", prereqTree: null },
    ];

    expect(getModuleNeighborhood("CS2030", mods)).toEqual(
      new Set(["CS2030", "CS1010", "CS2040"]),
    );
  });
});
