// MissingMods.test.js
import MissingMods from "./missingmods";
import { describe, it, expect } from "vitest";

describe("MissingMods", () => {
  it("returns empty array for completed module", () => {
    expect(MissingMods("CS1010", ["CS1010"])).toEqual([]);
  });

  it("returns missing module", () => {
    expect(MissingMods("CS1010", [])).toEqual(["CS1010"]);
  });

  it("handles AND trees", () => {
    expect(MissingMods({ and: ["CS1010", "MA1521"] }, [])).toEqual([
      "CS1010",
      "MA1521",
    ]);
  });

  it("handles OR tres", () => {
    expect(
      MissingMods(
        {
          and: [
            "CS1231",
            {
              or: ["CS1010S", "CS1010X"],
            },
          ],
        },
        [],
      ),
    ).toEqual(["CS1231", ["CS1010S", "CS1010X"]]);
  });

  it("handles one 'AND' module taken", () => {
    expect(
      MissingMods(
        {
          and: [
            "CS1231",
            {
              or: ["CS1010S", "CS1010X"],
            },
          ],
        },
        ["CS1231"],
      ),
    ).toEqual([["CS1010S", "CS1010X"]]);
  });
});
