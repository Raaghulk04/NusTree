let preclusionsCache = null;

export default async function isPrecluded({
  completedIds,
  takenIds,
  compulsoryIds,
}) {
  if (!preclusionsCache) {
    try {
      let res = await fetch("/api/preclusions");
      preclusionsCache = await res.json();
    } catch {
      preclusionsCache = [];
    }
  }
  const precluded = Array.isArray(preclusionsCache) ? preclusionsCache : [];

  const filteredtakenIds = takenIds.filter(
    (taken) => !precluded.includes(taken.id),
  );
  const filteredCompulsory = compulsoryIds.filter(
    (comp) => !precluded.includes(comp.id),
  );
  return completedIds.concat(filteredCompulsory).concat(filteredtakenIds);
}

export function clearPreclusionsCache() {
  preclusionsCache = null;
}
