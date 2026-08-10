import buildTree from "./buildTree";
import { describe, expect, it } from "vitest";

describe("buildTree", () => {
  it("handles base case of a single module", () => {
    const edgeIds = new Set();
    const result = [];
    expect(
      buildTree(
        "CS1101S",
        "CS1231S",
        new Set(["CS1101S", "CS1231S", "CS2030S"]),
        result,
        edgeIds,
        "and",
        [],
        {},
      ),
    ).toBeUndefined();
    console.log("edgeIds", edgeIds);
    expect(edgeIds.size).toBe(1);
    expect(result.length).toBe(1);
    expect(result[0].source).toBe("CS1101S");
    expect(result[0].target).toBe("CS1231S");
  });

  it("handles empty tree", () => {
    expect(
      buildTree(
        null,
        "CS1231S",
        new Set(["CS1101S", "CS1231S", "CS2030S"]),
        [],
        new Set(),
        "and",
        [],
        {},
      ),
    ).toBeUndefined();
  });

  it("handles complex nested tree with all modules in graph", () => {
    const result = [];
    const edgeIds = new Set();
    expect(
      buildTree(
        {
          and: [
            {
              or: ["CS2030S:D", "CS2030:D", "CS2030DE:D"],
            },
            {
              or: [
                "CS2040S:D",
                "CS2040:D",
                "CS2040C:D",
                "CS2040HS:D",
                "CS2040DE:D",
              ],
            },
          ],
        },
        "CS2103",
        new Set(["CS1101S", "CS2030S", "CS2040S"]),
        result,
        edgeIds,
        "and",
        [],
        {},
      ),
    ).toBeUndefined();

    expect(result.length).toBe(2);
    expect(edgeIds.size).toBe(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ source: "CS2030S", target: "CS2103" }),
        expect.objectContaining({ source: "CS2040S", target: "CS2103" }),
      ]),
    );
  });

  it("handles complex nested tree when some mods are not inside graph", () => {
    const result = [];
    const edgeIds = new Set();

    expect(
      buildTree(
        {
          and: [
            {
              or: ["CS2030S:D", "CS2030:D", "CS2030DE:D"],
            },
            {
              or: [
                "CS2040S:D",
                "CS2040:D",
                "CS2040C:D",
                "CS2040HS:D",
                "CS2040DE:D",
              ],
            },
          ],
        },
        "CS2103",
        new Set(["CS1101S", "CS2030S"]),
        result,
        edgeIds,
        "and",
        [],
        {},
      ),
    ).toBeUndefined();

    expect(result.length).toBe(1);
    expect(edgeIds.size).toBe(1);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ source: "CS2030S", target: "CS2103" }),
      ]),
    );
  });

  it("creates an OR junction node when multiple visible children exist", () => {
    const result = [];
    const edgeIds = new Set();
    const nodesResult = [];

    buildTree(
      {
        or: ["CS2030S:D", "CS2040S:D"],
      },
      "CS2103",
      new Set(["CS2030S", "CS2040S", "CS2103"]),
      result,
      edgeIds,
      "and",
      nodesResult,
      {
        CS2030S: { x: 0, y: 100 },
        CS2040S: { x: 200, y: 100 },
        CS2103: { x: 300, y: 200 },
      },
    );

    expect(nodesResult).toHaveLength(1);
    expect(nodesResult[0]).toEqual(
      expect.objectContaining({
        id: "junction-or-CS2103-CS2030S-CS2040S",
        data: { label: "OR" },
        position: { x: 200, y: 100 },
      }),
    );

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: "junction-or-CS2103-CS2030S-CS2040S",
          target: "CS2103",
        }),
        expect.objectContaining({
          source: "CS2030S",
          target: "junction-or-CS2103-CS2030S-CS2040S",
          label: "OR",
        }),
        expect.objectContaining({
          source: "CS2040S",
          target: "junction-or-CS2103-CS2030S-CS2040S",
          label: "OR",
        }),
      ]),
    );
  });

  it("does not duplicate a junction node when traversing the same branch twice", () => {
    const result = [];
    const edgeIds = new Set();
    const nodesResult = [];
    const tree = { or: ["CS2030S:D", "CS2040S:D"] };
    const visibleIds = new Set(["CS2030S", "CS2040S", "CS2103"]);

    buildTree(tree, "CS2103", visibleIds, result, edgeIds, "and", nodesResult, {});
    buildTree(tree, "CS2103", visibleIds, result, edgeIds, "and", nodesResult, {});

    expect(nodesResult).toHaveLength(1);
    expect(result).toHaveLength(3);
  });

  it("collapses an OR branch with one visible child into a direct edge", () => {
    const result = [];
    const edgeIds = new Set();
    const nodesResult = [];

    buildTree(
      {
        or: ["CS2030S:D", "CS2040S:D"],
      },
      "CS2103",
      new Set(["CS2030S", "CS2103"]),
      result,
      edgeIds,
      "and",
      nodesResult,
      {},
    );

    expect(nodesResult).toHaveLength(0);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(
      expect.objectContaining({
        source: "CS2030S",
        target: "CS2103",
        label: "AND",
      }),
    );
  });
});
