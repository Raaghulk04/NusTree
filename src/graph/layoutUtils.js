import dagre from "@dagrejs/dagre";

const NODE_WIDTH = 140;
const NODE_HEIGHT = 52;
const COMPACT_NODE_GAP = 16;
const ROW_GROUP_TOLERANCE = 8;
const MAX_NODES_PER_LAYER = 7;
const SUBLAYER_SPACING = 84;
const RANK_LAYER_GAP = 40;

export const compareModuleIds = (a, b) => {
  const levelA = getModuleLevel(a);
  const levelB = getModuleLevel(b);
  if (levelA !== levelB) return levelA.localeCompare(levelB);

  const prefixA = getModulePrefix(a);
  const prefixB = getModulePrefix(b);
  if (prefixA !== prefixB) return prefixA.localeCompare(prefixB);

  return String(a).localeCompare(String(b), undefined, {
    numeric: true,
    sensitivity: "base",
  });
};

// Flatten prerequisite configurations out to arrays
export const extractMods = (tree) => {
  if (!tree) return [];
  if (typeof tree === "string") {
    return [tree.split(":")[0].replace("%", "")];
  }
  if (tree.or) return tree.or.flatMap(extractMods);
  if (tree.and) return tree.and.flatMap(extractMods);
  return [];
};

/**
 * Computes top-to-bottom Dagre positions for all visible module nodes.
 */
export const computeNodePositions = (allMods, options = {}) => {
  const graph = new dagre.graphlib.Graph();
  graph.setDefaultEdgeLabel(() => ({}));
  graph.setGraph({
    rankdir: "TB",
    ranksep: 115,
    nodesep: 30,
    edgesep: 20,
    marginx: 20,
    marginy: 20,
    ranker: "tight-tree",
  });

  const sortedMods = [...allMods].sort((a, b) => compareModuleIds(a.id, b.id));
  const moduleIds = new Set(sortedMods.map((mod) => mod.id));

  sortedMods.forEach((mod) => {
    graph.setNode(mod.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  sortedMods.forEach((mod) => {
    const prereqs = [...new Set(extractMods(mod.prereqTree))];
    prereqs.sort(compareModuleIds).forEach((prereqId) => {
      if (moduleIds.has(prereqId) && prereqId !== mod.id) {
        graph.setEdge(prereqId, mod.id);
      }
    });
  });

  dagre.layout(graph);

  const rows = [];
  sortedMods.forEach((module) => {
    const dagreNode = graph.node(module.id);
    if (!dagreNode) return;

    const row = rows.find(
      (candidate) => Math.abs(candidate.y - dagreNode.y) <= ROW_GROUP_TOLERANCE,
    );

    if (row) {
      row.nodes.push({ id: module.id, dagreX: dagreNode.x });
    } else {
      rows.push({
        y: dagreNode.y,
        nodes: [{ id: module.id, dagreX: dagreNode.x }],
      });
    }
  });

  rows.sort((a, b) => a.y - b.y);

  const layoutPositions = {};
  const horizontalStep = NODE_WIDTH + COMPACT_NODE_GAP;
  let currentY = 0;

  rows.forEach((row) => {
    row.nodes.sort((a, b) => {
      const codeComparison = compareModuleIds(a.id, b.id);
      return codeComparison || a.dagreX - b.dagreX;
    });

    const layers = [];
    for (
      let index = 0;
      index < row.nodes.length;
      index += MAX_NODES_PER_LAYER
    ) {
      layers.push(row.nodes.slice(index, index + MAX_NODES_PER_LAYER));
    }

    layers.forEach((layer, layerIndex) => {
      const layerWidth = (layer.length - 1) * horizontalStep;
      const alternatingOffset = layerIndex % 2 === 1 ? horizontalStep / 2 : 0;
      layer.forEach((node, nodeIndex) => {
        layoutPositions[node.id] = {
          x: nodeIndex * horizontalStep - layerWidth / 2 + alternatingOffset,
          y: currentY + layerIndex * SUBLAYER_SPACING,
        };
      });
    });

    currentY += layers.length * SUBLAYER_SPACING + RANK_LAYER_GAP;
  });

  if (options.anchorId && layoutPositions[options.anchorId]) {
    const anchorOffset = layoutPositions[options.anchorId].x;
    Object.values(layoutPositions).forEach((position) => {
      position.x -= anchorOffset;
    });
  }

  return layoutPositions;
};

export const getModuleLevel = (moduleId) => {
  const number = Number(String(moduleId).match(/\d+/)?.[0]);
  if (!number) return "";
  return `${Math.floor(number / 1000) * 1000}`;
};

export const getModulePrefix = (moduleId) =>
  String(moduleId).match(/^[A-Z]+/)?.[0] || "";

export const getDirectPrerequisites = (moduleId, modMap) => {
  const mod = modMap.get(moduleId);
  return [...new Set(extractMods(mod?.prereqTree))];
};

export const buildDependentsMap = (mods) => {
  const map = new Map();
  mods.forEach((mod) => {
    const prereqs = extractMods(mod.prereqTree);
    prereqs.forEach((prereqId) => {
      if (!map.has(prereqId)) map.set(prereqId, []);
      map.get(prereqId).push(mod.id);
    });
  });
  return map;
};

export const getDirectDependents = (moduleId, mods, dependentsMap = null) => {
  if (dependentsMap) {
    return dependentsMap.get(moduleId) || [];
  }
  return mods
    .filter((mod) => extractMods(mod.prereqTree).includes(moduleId))
    .map((mod) => mod.id);
};

export const getPrerequisiteClosure = (moduleId, modMap) => {
  const result = new Set();
  const visit = (id) => {
    getDirectPrerequisites(id, modMap).forEach((prereqId) => {
      if (result.has(prereqId)) return;
      result.add(prereqId);
      visit(prereqId);
    });
  };

  visit(moduleId);
  return result;
};

export const getModuleNeighborhood = (selectedId, mods, extraIds = []) => {
  if (!selectedId) return new Set();

  const modMap = new Map(mods.map((mod) => [mod.id, mod]));
  const ids = new Set([selectedId, ...extraIds]);

  getPrerequisiteClosure(selectedId, modMap).forEach((id) => ids.add(id));
  getDirectDependents(selectedId, mods).forEach((id) => ids.add(id));

  return ids;
};
