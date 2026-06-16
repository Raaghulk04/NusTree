export default function MissingMods(Tree, completedIds) {
  if (!Tree) return [];
  if (typeof Tree === "string") {
    const modCode = Tree.split(":")[0];
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

    if (missingOptions.some((option) => option.length === 0)) {
      return [];
    } else {
      const allOptions = missingOptions.reduce((a, b) => a.concat(b), []);
      return [allOptions];
    }
  }

  return [];
}
