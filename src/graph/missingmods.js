export default function MissingMods(Tree, completedIds) {
  if (!Tree) return [];
  if (typeof Tree === "string") {
    // Strip wildcards like % (e.g. ACC1701% -> ACC1701)
    const modCode = Tree.split(":")[0].replace("%", "");
    if (completedIds.includes(modCode)) {
      return [];
    } else {
      return [modCode];
    }
  }
  if (Tree.and) {
    return Tree.and.reduce(
      (a, b) => a.concat(MissingMods(b, completedIds)),
      [],
    );
  }

  if (Tree.or) {
    const missingOptions = Tree.or.map((t) => MissingMods(t, completedIds));

    // If any option is fully satisfied (returns empty array), then the whole OR is satisfied
    if (missingOptions.some((option) => option.length === 0)) {
      return [];
    } else {
      // Otherwise, we need all options (flattened)
      return [missingOptions.flat()];
    }
  }

  return [];
}
