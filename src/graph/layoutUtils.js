// Function to match module codes to a year level row baseline
export const getYLevel = (moduleId) => {
  const num = parseInt(moduleId.match(/\d+/)?.[0]);
  if (num < 2000) return 0;
  if (num < 3000) return 1;
  if (num < 4000) return 2;
  if (num < 5000) return 3;
  return 4;
};

// Flatten prerequisite configurations out to arrays
export const extractMods = (tree) => {
  if (!tree) return [];
  if (typeof tree === "string") return [tree.split(":")[0]];
  if (tree.or) return tree.or.flatMap(extractMods);
  if (tree.and) return tree.and.flatMap(extractMods);
  return [];
};

/**
 * Computes topological positions for all modules
 */
export const computeNodePositions = (allMods) => {
  // 1. Group modules by their primary year level (1000, 2000, etc.)
  const byLevel = {};
  allMods.forEach((m) => {
    const level = getYLevel(m.id);
    if (!byLevel[level]) byLevel[level] = [];
    byLevel[level].push(m);
  });

  const subLevelMapping = {};

  // 2. Track depth positions for modules within the same level
  Object.keys(byLevel).forEach((level) => {
    const currentLevelMods = byLevel[level];
    const levelModIds = new Set(currentLevelMods.map((m) => m.id));

    const getDependencyDepth = (modId, visited = new Set()) => {
      if (visited.has(modId)) return 0;
      visited.add(modId);

      const modObj = currentLevelMods.find((m) => m.id === modId);
      if (!modObj || !modObj.prereqTree) return 0;

      const prereqs = extractMods(modObj.prereqTree);
      const sameLevelPrereqs = prereqs.filter((p) => levelModIds.has(p));

      if (sameLevelPrereqs.length === 0) return 0;

      return (
        1 +
        Math.max(...sameLevelPrereqs.map((p) => getDependencyDepth(p, visited)))
      );
    };

    currentLevelMods.forEach((m) => {
      subLevelMapping[m.id] = getDependencyDepth(m.id);
    });
  });

  // 3. Map positions out using grid layout parameters
  const layoutPositions = {};

  allMods.forEach((module) => {
    const level = getYLevel(module.id);
    const levelMods = byLevel[level];
    const subLevelRow = subLevelMapping[module.id] || 0;

    const sameRowMods = levelMods.filter(
      (m) => subLevelMapping[m.id] === subLevelRow,
    );
    const posInRow = sameRowMods.findIndex((m) => m.id === module.id);
    const totalInRow = sameRowMods.length;

    layoutPositions[module.id] = {
      x: posInRow * 180 - totalInRow * 90,
      y: level * 350 + subLevelRow * 90,
    };
  });

  return layoutPositions;
};
