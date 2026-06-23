export default async function isPrecluded({
  completedIds,
  takenIds,
  compulsoryIds,
}) {
  let precluded = await fetch("/api/preclusions");
  precluded = await precluded.json();

  const filteredtakenIds = takenIds.filter(
    (taken) => !precluded.includes(taken.id),
  );
  const filteredCompulsory = compulsoryIds.filter(
    (comp) => !precluded.includes(comp.id),
  );
  return completedIds.concat(filteredCompulsory).concat(filteredtakenIds);
}
