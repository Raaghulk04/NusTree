#!/usr/bin/env node

const {
  defaultPaths,
  ensureJsonOnlyInput,
  loadDegreeLinks,
  parseDegreePage,
  updateDegreePresetFile,
} = require("./degree-scraper");

async function main() {
  ensureJsonOnlyInput(process.argv.slice(2));

  const { degreeLinksPath, presetPath, modulesPath } = defaultPaths();
  const degreeLinks = loadDegreeLinks(degreeLinksPath);

  for (const degreeLink of degreeLinks) {
    const response = await fetch(degreeLink.url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${degreeLink.url}: ${response.status} ${response.statusText}`,
      );
    }

    const html = await response.text();
    const parsed = parseDegreePage(html);
    const degreeName = degreeLink.name || parsed.degreeName;

    const updatedPreset = updateDegreePresetFile({
      presetPath,
      modulesPath,
      degreeCode: degreeLink.code,
      degreeName,
      compulsoryModules: parsed.compulsoryModules,
    });

    console.log(`Updated ${degreeLink.code}: ${updatedPreset.degreeName}`);
    console.log(`Compulsory modules: ${updatedPreset.compulsoryModules.join(", ")}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
