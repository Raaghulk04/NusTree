export default function buildTree(
  tree,
  targetId,
  allModIds,
  result,
  edgeIds,
  edgeType = "and",
) {
  if (!tree) return;

  if (typeof tree === "string") {
    const modId = tree.split(":")[0];

    if (!allModIds.has(modId)) {
      console.log(
        `Prereq ${modId} is required by ${targetId} but not in the graph`,
      );
      return;
    }

    const edgeId = `${modId}-${targetId}`;
    if (!edgeIds.has(edgeId)) {
      edgeIds.add(edgeId);
      result.push({
        id: edgeId,
        source: modId,
        target: targetId,
        label: edgeType === "or" ? "OR" : "AND",
        style: {
          stroke: edgeType === "or" ? "#8b5cf6" : "#ef4444",
          strokeWidth: 2,
        },
        labelStyle: {
          fontSize: "10px",
          fill: edgeType === "or" ? "#8b5cf6" : "#ef4444",
        },
      });
    }
    return;
  }

  if (tree.and) {
    tree.and.forEach((child) =>
      buildTree(child, targetId, allModIds, result, edgeIds, "and"),
    );
  }

  if (tree.or) {
    tree.or.forEach((child) =>
      buildTree(child, targetId, allModIds, result, edgeIds, "or"),
    );
  }
}
