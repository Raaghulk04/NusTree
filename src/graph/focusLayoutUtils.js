import dagre from "@dagrejs/dagre";
import { compareModuleIds, extractMods } from "./layoutUtils";

const NODE_WIDTH = 140;
const NODE_HEIGHT = 52;
const COMPACT_NODE_GAP = 16;
const ROW_GROUP_TOLERANCE = 8;
const SUBLAYER_SPACING = 84;
const RANK_LAYER_GAP = 40;

/**
 * Computes a clean hierarchical layout for focus mode, layouting all focus nodes (including ghost/missing nodes) and preserving dagre's horizontal positioning.
 */
export const computeFocusNodePositions = (focusIds, modMap, options = {}) => {
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

  const focusIdsSet = new Set(focusIds);
  const sortedIds = [...focusIdsSet].sort(compareModuleIds);

  sortedIds.forEach((id) => {
    graph.setNode(id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  sortedIds.forEach((id) => {
    const mod = modMap.get(id);
    if (!mod) return;
    const prereqs = [...new Set(extractMods(mod.prereqTree))];
    prereqs.forEach((prereqId) => {
      if (focusIdsSet.has(prereqId) && prereqId !== id) {
        graph.setEdge(prereqId, id);
      }
    });
  });

  dagre.layout(graph);

  const rows = [];
  sortedIds.forEach((id) => {
    const dagreNode = graph.node(id);
    if (!dagreNode) return;

    const row = rows.find(
      (candidate) => Math.abs(candidate.y - dagreNode.y) <= ROW_GROUP_TOLERANCE,
    );

    if (row) {
      row.nodes.push({ id, dagreX: dagreNode.x });
    } else {
      rows.push({
        y: dagreNode.y,
        nodes: [{ id, dagreX: dagreNode.x }],
      });
    }
  });

  rows.sort((a, b) => a.y - b.y);

  const layoutPositions = {};
  const horizontalStep = NODE_WIDTH + COMPACT_NODE_GAP;
  let currentY = 0;

  rows.forEach((row) => {
    // Sort solely by dagre's horizontal coordinate to preserve dependency alignment
    row.nodes.sort((a, b) => a.dagreX - b.dagreX);

    const layerWidth = (row.nodes.length - 1) * horizontalStep;
    row.nodes.forEach((node, nodeIndex) => {
      layoutPositions[node.id] = {
        x: nodeIndex * horizontalStep - layerWidth / 2,
        y: currentY,
      };
    });

    currentY += SUBLAYER_SPACING + RANK_LAYER_GAP;
  });

  // Anchor the selected node to x = 0
  if (options.anchorId && layoutPositions[options.anchorId]) {
    const anchorOffset = layoutPositions[options.anchorId].x;
    Object.values(layoutPositions).forEach((position) => {
      position.x -= anchorOffset;
    });
  }

  return layoutPositions;
};
