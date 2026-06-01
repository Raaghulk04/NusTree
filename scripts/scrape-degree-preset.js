#!/usr/bin/env node

const {
  defaultPaths,
  parseArgs,
  parseDegreePage,
  updateDegreePresetFile,
} = require("./degree-scraper");

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.url || !args.code) {
    throw new Error(
      "Usage: npm run scrape:degree -- --url <curriculum-url> --code <degree-code> [--name <degree-name>]",
    );
  }

  const response = await fetch(args.url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${args.url}: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const parsed = parseDegreePage(html);
  const degreeName = args.name || parsed.degreeName;
  const { presetPath, modulesPath } = defaultPaths();

  const updatedPreset = updateDegreePresetFile({
    presetPath,
    modulesPath,
    degreeCode: args.code,
    degreeName,
    compulsoryModules: parsed.compulsoryModules,
  });

  console.log(`Updated ${args.code}: ${updatedPreset.degreeName}`);
  console.log(`Compulsory modules: ${updatedPreset.compulsoryModules.join(", ")}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
