export default async function isPrecluded({
  completedIds,
  takenIds,
  compulsoryIds,
}) {
  console.log(compulsoryIds);
  let precluded = await fetch("/api/preclusions");
  precluded = await precluded.json();
  console.log("precluded", precluded);

  const filteredtakenIds = takenIds.filter(
    (taken) => !precluded.includes(taken.id),
  );
  const filteredCompulsory = compulsoryIds.filter(
    (comp) => !precluded.includes(comp.id),
  );
  console.log("filteredMods", filteredtakenIds);
  console.log("filteredComp", filteredCompulsory);
  return completedIds.concat(filteredCompulsory).concat(filteredtakenIds);
}
