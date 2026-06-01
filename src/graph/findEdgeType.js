export default function findEdgeType(tree, startId) {
  if (!tree) return null;
  if (typeof tree === "string") return null;

  if (tree.and) {
    for (const child of tree.and) {
      if (typeof child === "string" && child.split(":")[0] === startId)
        return "and";
      const nested = findEdgeType(child, startId);
      if (nested) return nested;
    }
  }

  if (tree.or) {
    for (const child of tree.or) {
      if (typeof child === "string" && child.split(":")[0] === startId)
        return "or";
      const nested = findEdgeType(child, startId);
      if (nested) return nested;
    }
  }

  return null;
}
