import {
  computeNodePositions,
  extractMods,
  getDirectDependents,
  getModuleNeighborhood,
} from "./layoutUtils";




export function buildDependentTree(sourceId, allMods, resultEdges, edgeSet, completedIdSet) {

}

export function getDeepPrereqIds(sourceId, prereqMap, prereqIds) {
  if (!prereqMap) {
    return;
  }
  oneDepthMods = extractMods(prereqMap.get(sourceId));
  
  oneDepthMods.foreach(mod => {
    prereqIds.push(mod)
    getDeepPrereqIds(mod, prereqMap, prereqIds)
  })
  return;
}

export function getRenderableFocusIds(sourceId, deepPrereqs, directDepenedents) {
  return new Set([...deepPrereqs, ...directDepenedents]).add(sourceId)
}
