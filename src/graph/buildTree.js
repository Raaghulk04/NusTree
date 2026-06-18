export default function buildTree(
  tree,
  targetId,
  allModIds, // only ids from the graph
  result,
  edgeIds,
  edgeType = "and",
  nodesResult,
  nodePositions, // <-- NEW: Pass down layout coordinates
) {
  console.log("allModsIds", allModIds);

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
        nodePositions, // <-- Pass it down
      ),
    );
  }

  // RECURSIVE CASE B: Split pathways / alternative tracks (OR logic)
  if (tree.or) {
    const childInGraph = tree.or.filter((child) => {
      if (typeof child != "string") {
        return true;
      }
      let childId = child.split(":")[0];
      childId = childId.replace("%", "");

      return allModIds.has(childId);
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
    // Generate a STABLE ID based on children to prevent infinite re-renders
    const childIds = tree.or
      .map((c) =>
        typeof c === "string" ? c.split(":")[0].replace("%", "") : "nested",
      )
      .sort()
      .join("-");
    const junctionId = `junction-or-${targetId}-${childIds}`;

    // --- NEW: DYNAMIC POSITIONING LOGIC ---
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
        // Calculate average positions of the prerequisites
        const avgX =
          childModuleIds.reduce((sum, id) => sum + nodePositions[id].x, 0) /
          childModuleIds.length;
        const avgY =
          childModuleIds.reduce((sum, id) => sum + nodePositions[id].y, 0) /
          childModuleIds.length;

        // Place junction exactly halfway between prerequisites and target
        junctionPosition = {
          x: (avgX + targetPos.x) / 2,
          y: avgY, // Keeps it vertically aligned with its branch track
        };
      } else {
        // Fallback: Offset slightly to the left of the target node
        junctionPosition = { x: targetPos.x - 100, y: targetPos.y };
      }
    }
    // --------------------------------------

    // Create the virtual node object for ReactFlow
    if (nodesResult) {
      nodesResult.push({
        id: junctionId,
        type: "default",
        position: junctionPosition, // <-- Applied calculated position
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

    // Redirect children to plug into our new junction node
    tree.or.forEach((child) =>
      buildTree(
        child,
        junctionId,
        allModIds,
        result,
        edgeIds,
        "or",
        nodesResult,
        nodePositions, // <-- Pass it down
      ),
    );
  }
}
