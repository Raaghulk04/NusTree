function hasAnyModInSet(node, set) {
  if (!node) return false;
  if (typeof node === "string") {
    let code = node.split(":")[0];
    code = code.replace("%", "");
    return set.has(code);
  }
  if (node.and) {
    return node.and.some((child) => hasAnyModInSet(child, set));
  }
  if (node.or) {
    return node.or.some((child) => hasAnyModInSet(child, set));
  }
  if (node.nOf) {
    const children = node.nOf[1];
    return Array.isArray(children) && children.some((child) => hasAnyModInSet(child, set));
  }
  return false;
}

export default function buildTree(
  tree, // prereqTree
  targetId, // mod id
  allModIds, // only ids from the graph, Set<any>
  result, // array
  edgeIds, // empty set
  edgeType = "and",
  nodesResult, // any[]
  nodePositions, // position map
) {
  if (!tree) return;

  // BASE CASE: It's a string module name (e.g., "CS1010S")
  if (typeof tree === "string") {
    let modId = tree.split(":")[0];
    modId = modId.replace("%", "");

    if (!allModIds.has(modId)) {
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

  // RECURSIVE CASE A: Standard sequential dependencies (AND logic)
  if (tree.and) {
    tree.and.forEach((child) =>
      buildTree(
        child,
        targetId,
        allModIds,
        result,
        edgeIds,
        "and",
        nodesResult,
        nodePositions,
      ),
    );
  }

  // RECURSIVE CASE B: Split pathways / alternative tracks (OR logic)
  if (tree.or) {
    const childInGraph = tree.or.filter((child) => {
      return hasAnyModInSet(child, allModIds);
    });

    if (childInGraph.length === 0) {
      return;
    }
    if (childInGraph.length === 1) {
      buildTree(
        childInGraph[0],
        targetId,
        allModIds,
        result,
        edgeIds,
        "and",
        nodesResult,
        nodePositions,
      );
      return;
    }
    const childIds = tree.or
      .map((c) =>
        typeof c === "string" ? c.split(":")[0].replace("%", "") : "nested",
      )
      .sort()
      .join("-");
    const junctionId = `junction-or-${targetId}-${childIds}`;

    let junctionPosition = { x: 0, y: 0 };

    if (nodePositions && nodePositions[targetId]) {
      const targetPos = nodePositions[targetId];

      // Extract direct string module IDs nested inside this OR branch
      const childModuleIds = tree.or
        .map((child) =>
          typeof child === "string" ? child.split(":")[0] : null,
        )
        .filter((id) => id && nodePositions[id]);

      if (childModuleIds.length > 0) {
        const avgX =
          childModuleIds.reduce((sum, id) => sum + nodePositions[id].x, 0) /
          childModuleIds.length;
        const avgY =
          childModuleIds.reduce((sum, id) => sum + nodePositions[id].y, 0) /
          childModuleIds.length;

        junctionPosition = {
          x: (avgX + targetPos.x) / 2,
          y: avgY,
        };
      } else {
        junctionPosition = { x: targetPos.x - 100, y: targetPos.y };
      }
    }

    if (nodesResult && !nodesResult.some((node) => node.id === junctionId)) {
      nodesResult.push({
        id: junctionId,
        type: "default",
        position: junctionPosition,
        data: { label: "OR" },
        style: {
          width: 35,
          height: 35,
          borderRadius: "50%",
          backgroundColor: "#8b5cf6",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: "bold",
          border: "none",
        },
      });
    }

    const junctionEdgeId = `${junctionId}-${targetId}`;
    if (!edgeIds.has(junctionEdgeId)) {
      edgeIds.add(junctionEdgeId);
      result.push({
        id: junctionEdgeId,
        source: junctionId,
        target: targetId,
        style: { stroke: "#8b5cf6", strokeWidth: 2 },
      });
    }

    tree.or.forEach((child) =>
      buildTree(
        child,
        junctionId,
        allModIds,
        result,
        edgeIds,
        "or",
        nodesResult,
        nodePositions,
      ),
    );
  }
}
