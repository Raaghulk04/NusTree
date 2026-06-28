import findEdgeType from "./findEdgeType";
import { describe, expect, it } from "vitest";

describe("findEdgeType", () => {
  it("detects nested OR edge", () => {
    expect(
      findEdgeType(
        {
          or: [
            "CS2040C:D",
            {
              and: [
                {
                  or: ["CS2030:D", "CS2030S:D", "CS2030DE:D"],
                },
                {
                  or: ["CS2040S:D", "CS2040:D", "CS2040HS:D", "CS2040DE:D"],
                },
              ],
            },
          ],
        },
        "CS2030S",
      ),
    ).toBe("or");
  });

  it("detects nested AND edge", () => {
    expect(
      findEdgeType(
        {
          or: [
            {
              and: ["CS1101S", "CS1231S"],
            },
            {
              and: ["CS2111S", "CS2040S"],
            },
          ],
        },
        "CS1101S",
      ),
    ).toBe("and");
  });
});
