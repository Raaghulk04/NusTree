import { after } from "next/server";
import isPrecluded, { clearPreclusionsCache } from "./isPreclusion";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

describe("isPrecluded", () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
    clearPreclusionsCache();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("filters out precluded mods from taken and compulsory ids and merges the remaining neatly", async () => {
    const mockPreclusions = ["CS1231S", "CS2040"];
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue(mockPreclusions),
      }),
    );
    const completedIds = [{ id: "CS1101S" }];
    const takenIds = [{ id: "CS1231" }, { id: "CS2040" }];
    const compulsoryIds = [{ id: "CS1231S" }, { id: "CS2040S" }];

    const result = await isPrecluded({ completedIds, takenIds, compulsoryIds });
    console.log("result", result);
    expect(fetch).toHaveBeenCalledWith("/api/preclusions");
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(result.length).toBe(3);
    expect(result).toEqual([
      { id: "CS1101S" },
      { id: "CS2040S" },
      { id: "CS1231" },
    ]);
  });

  it("handles empty preclusion lists neatly", async () => {
    const mockPreclusions = [];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue(mockPreclusions),
      }),
    );
    const completedIds = [{ id: "CS1101S" }];
    const takenIds = [{ id: "CS1231" }];
    const compulsoryIds = [{ id: "CS2040S" }];

    const result = await isPrecluded({ completedIds, takenIds, compulsoryIds });
    expect(fetch).toHaveBeenCalledWith("/api/preclusions");
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(result.length).toBe(3);
    expect(result).toEqual([
      { id: "CS1101S" },
      { id: "CS2040S" },
      { id: "CS1231" },
    ]);
  });
});
