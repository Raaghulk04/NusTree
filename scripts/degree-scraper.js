const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const MODULE_CODE_PATTERN = /\b[A-Z]{2,4}\d{4}[A-Z]{0,3}\b/g;

const CONDITIONAL_OR_CHOICE_PATTERN =
  /\b(either|one of|or|choose|choice|option|at least|at most|satisfy|approved|may|opt|replace|in place of|without|double[- ]degree|recommended|preclusion|precludes|if|unless|internship|focus area|elective|students who|students with|gpa|honours|highest distinction|dissertation)\b/i;

function selectContentRoot($) {
  const candidates = [
    "main",
    "article",
    ".entry-content",
    ".post-content",
    ".page-content",
    "#content",
    ".content",
    "body",
  ];

  return candidates
    .map((selector) => $(selector).first())
    .filter(($el) => $el.length > 0)
    .sort((a, b) => b.text().length - a.text().length)[0];
}

function normaliseText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function getDegreeName($) {
  const heading = normaliseText($("h1").first().text());
  if (!heading) return "Unknown Degree";

  const inMatch = heading.match(/\bin\s+(.+)$/i);
  if (inMatch) return inMatch[1].trim();

  return heading
    .replace(/^Bachelor of [^(]+(\([^)]+\))?\s*/i, "")
    .replace(/^BComp\s*\([^)]+\)\s*/i, "")
    .trim();
}

function getTextBlocks($) {
  const $root = selectContentRoot($).clone();
  $root.find("script, style, nav, header, footer, form, noscript").remove();

  const blocks = [];
  $root.find("li, p, tr, h2, h3, h4").each((_, element) => {
    const $element = $root.find(element);
    const tagName = element.tagName?.toLowerCase();
    const text =
      tagName === "tr"
        ? $element
            .find("th, td")
            .map((__, cell) => normaliseText($root.find(cell).text()))
            .get()
            .filter(Boolean)
            .join(" | ")
        : normaliseText($element.text());

    if (text) blocks.push(text);
  });

  return blocks;
}

function hasChoiceSyntax(block) {
  return (
    CONDITIONAL_OR_CHOICE_PATTERN.test(block) ||
    /[A-Z]{2,4}%/.test(block) ||
    /\b[A-Z]{2,4}\d{4}[A-Z]{0,3}\s*\/\s*[A-Z]{0,4}?\d{3,4}[A-Z]{0,3}\b/.test(block)
  );
}

function extractFixedModuleCodes(html) {
  const $ = cheerio.load(html);
  const blocks = getTextBlocks($);
  const seen = new Set();
  const moduleCodes = [];

  for (const block of blocks) {
    const matches = block.match(MODULE_CODE_PATTERN);
    if (!matches || hasChoiceSyntax(block)) continue;

    for (const moduleCode of matches) {
      if (!seen.has(moduleCode)) {
        seen.add(moduleCode);
        moduleCodes.push(moduleCode);
      }
    }
  }

  return moduleCodes;
}

function parseDegreePage(html) {
  const $ = cheerio.load(html);
  return {
    degreeName: getDegreeName($),
    compulsoryModules: extractFixedModuleCodes(html),
  };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function validateModuleCodes(moduleCodes, modulesPath) {
  const moduleData = readJson(modulesPath);
  const knownCodes = new Set(Object.keys(moduleData));
  return moduleCodes.filter((moduleCode) => !knownCodes.has(moduleCode));
}

function updateDegreePresetFile({
  presetPath,
  modulesPath,
  degreeCode,
  degreeName,
  compulsoryModules,
}) {
  const unknownModules = validateModuleCodes(compulsoryModules, modulesPath);
  if (unknownModules.length > 0) {
    throw new Error(`Unknown module code(s): ${unknownModules.join(", ")}`);
  }

  const presetData = fs.existsSync(presetPath) ? readJson(presetPath) : {};
  presetData[degreeCode] = {
    degreeName,
    compulsoryModules,
  };
  writeJson(presetPath, presetData);

  return presetData[degreeCode];
}

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;

    const key = arg.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = value;
      index += 1;
    }
  }
  return args;
}

function defaultPaths(repoRoot = process.cwd()) {
  return {
    presetPath: path.join(repoRoot, "src", "data", "degree-presets.json"),
    modulesPath: path.join(repoRoot, "src", "data", "modules.json"),
  };
}

module.exports = {
  extractFixedModuleCodes,
  parseArgs,
  parseDegreePage,
  updateDegreePresetFile,
  validateModuleCodes,
  defaultPaths,
};
