import { useMemo } from "react";
import {
  extractMods,
  getDirectDependents,
} from "./layoutUtils";
import { computeFocusNodePositions } from "./focusLayoutUtils";

export const isSatisfied = (node, completedIdSet) => {
  if (!node) return false;
  if (typeof node === "string") {
    const code = node.split(":")[0].replace("%", "");
    return completedIdSet.has(code);
  }
  if (node.and) {
    return node.and.every((child) => isSatisfied(child, completedIdSet));
  }
  if (node.or) {
    return node.or.some((child) => isSatisfied(child, completedIdSet));
  }
  return false;
};

export const getDeepPrereqIds = (treeNode, prereqMap, prereqIds, completedIdSet) => {
  if (!treeNode) return;

  // Case 1: treeNode is a string (module ID)
  if (typeof treeNode === "string") {
    const code = treeNode.split(":")[0].replace("%", "");
    if (!prereqIds.has(code)) {
      prereqIds.add(code);
      // Recursively traverse this module's own prerequisite tree if it has not been completed
      if (!completedIdSet.has(code)) {
        const nextTree = prereqMap.get(code);
        if (nextTree) {
          getDeepPrereqIds(nextTree, prereqMap, prereqIds, completedIdSet);
        }
      }
    }
    return;
  }

  // Case 2: treeNode has "and" branch
  if (treeNode.and) {
    treeNode.and.forEach((child) => {
      getDeepPrereqIds(child, prereqMap, prereqIds, completedIdSet);
    });
    return;
  }

  // Case 3: treeNode has "or" branch
  if (treeNode.or) {
    const satisfiedChildren = treeNode.or.filter((child) =>
      isSatisfied(child, completedIdSet),
    );

    if (satisfiedChildren.length > 0) {
      // If the OR condition is satisfied, only traverse/collect the satisfied options
      satisfiedChildren.forEach((child) => {
        getDeepPrereqIds(child, prereqMap, prereqIds, completedIdSet);
      });
    } else {
      // If unsatisfied, we must show all options as missing/ghosts
      treeNode.or.forEach((child) => {
        getDeepPrereqIds(child, prereqMap, prereqIds, completedIdSet);
      });
    }
  }
};

export function useFocusMode({
  selectedNode,
  selectedView,
  prereqMap,
  completedIds,
  mods,
  modMap,
}) {
  const deepPrereqs = useMemo(() => {
    if (!selectedNode) return new Set();
    const set = new Set();
    const completedIdSet = new Set(completedIds);
    getDeepPrereqIds(selectedNode, prereqMap, set, completedIdSet);
    return set;
  }, [selectedNode, prereqMap, completedIds]);

  const directDependents = useMemo(() => {
    if (!selectedNode) return new Set();
    return new Set(
      getDirectDependents(selectedNode, mods),
    );
  }, [selectedNode, mods]);

  const focusIds = useMemo(() => {
    if (!selectedNode) return new Set();
    const set = new Set([selectedNode]);
    deepPrereqs.forEach((id) => set.add(id));
    directDependents.forEach((id) => set.add(id));
    return set;
  }, [selectedNode, deepPrereqs, directDependents]);

  const focusPositions = useMemo(() => {
    if (!selectedNode || selectedView !== "focus") return {};

    return computeFocusNodePositions(focusIds, modMap, { anchorId: selectedNode });
  }, [selectedNode, selectedView, focusIds, modMap]);

  return {
    deepPrereqs,
    directDependents,
    focusIds,
    focusPositions,
  };
}
