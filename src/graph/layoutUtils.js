const MAX_NODES_ROW = 7;
const NODE_HEIGHT = 40;
const ROW_SPACING = 140;
const COL_SPACING = 270;
const BAND_GAP = 100;

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

// Depth-first search to figure how deep in the DAG a module is
const getDependencyDepth = (currentLevelMods, modId, visited = new Set()) => {
  if (visited.has(modId)) return 0;
  visited.add(modId);

  const modObj = currentLevelMods.find((m) => m.id === modId);
  if (!modObj || !modObj.prereqTree) return 0;

  const prereqs = extractMods(modObj.prereqTree);
  const sameLevelPrereqs = prereqs.filter((p) =>
    currentLevelMods.find((m) => m.id === p),
  );

  if (sameLevelPrereqs.length === 0) return 0;

  return (
    1 +
    Math.max(
      ...sameLevelPrereqs.map((p) =>
        getDependencyDepth(currentLevelMods, p, visited),
      ),
    )
  );
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

  // 2. Sort each level by dependency depth and assign grid (x, y) positions
  const subLevelMapping = {};
  Object.keys(byLevel).forEach((level) => {
    const currentLevelMods = byLevel[level];

    currentLevelMods
      .sort(
        (a, b) =>
          getDependencyDepth(currentLevelMods, a.id) -
          getDependencyDepth(currentLevelMods, b.id),
      )
      .forEach((mod, index) => {
        const row = Math.floor(index / MAX_NODES_ROW);
        const isOddRow = row % 2 === 1;

        subLevelMapping[mod.id] = {
          x:
            (index % MAX_NODES_ROW) * COL_SPACING +
            (isOddRow ? COL_SPACING / 2 : 0),
          y: row,
        };
      });
  });

  // 3. Compute each level's actual pixel height based on row count + node height
  const levelHeights = {};
  Object.keys(byLevel).forEach((level) => {
    const mods = byLevel[level];
    const rowCount = Math.ceil(mods.length / MAX_NODES_ROW);
    levelHeights[level] = rowCount * ROW_SPACING + NODE_HEIGHT;
  });

  // 4. Compute cumulative Y start position for each level
  const levelStartY = {};
  let cumulative = 0;
  Object.keys(byLevel)
    .sort((a, b) => Number(a) - Number(b))
    .forEach((level) => {
      levelStartY[level] = cumulative;
      cumulative += levelHeights[level] + BAND_GAP;
    });

  // 5. Map final pixel positions
  const layoutPositions = {};
  allMods.forEach((module) => {
    const level = getYLevel(module.id);
    const subLevelRow = subLevelMapping[module.id] || { x: 0, y: 0 };

    layoutPositions[module.id] = {
      x: subLevelRow.x,
      y: levelStartY[level] + subLevelRow.y * ROW_SPACING,
    };
  });

  return layoutPositions;
};
