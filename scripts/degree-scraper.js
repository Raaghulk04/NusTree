const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const MODULE_CODE_PATTERN = /\b[A-Z]{2,3}\d{4}[A-Z]{0,3}\b/g;

const CONDITIONAL_OR_CHOICE_PATTERN =
  /\b(either|one of|or|choose|choice|option|at least|at most|satisfy|approved|may|opt|replace|in place of|without|double[- ]degree|recommended|preclusion|precludes|if|unless|internship|industry seminar|focus area|elective|following list|students who|students with|gpa|honours|highest distinction|dissertation|voluntary)\b|either(?=[A-Z])/i;

const SKIPPED_SECTION_PATTERN =
  /\b(programme electives?|unrestricted electives?|industry experience|industrial experience|nus overseas colleges?|footnotes?)/i;

const SECTION_HEADING_PATTERN =
  /\b(common curriculum requirements?|programme requirements?|computing foundation|information security requirements?|mathematics(?: and sciences)?|computing ethics|interdisciplinary|cross-disciplinary education)\b/i;

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
  let currentSection = "";
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

    if (!text) return;

    const parentListContext = $element
      .parents("li")
      .map((__, listItem) => normaliseText($root.find(listItem).text()))
      .get()
      .join(" ");

    if (/^h[2-4]$/.test(tagName)) {
      currentSection = text;
    } else if (
      !MODULE_CODE_PATTERN.test(text) &&
      !/[A-Z]{2,4}%/.test(text) &&
      (SKIPPED_SECTION_PATTERN.test(text) || SECTION_HEADING_PATTERN.test(text)) &&
      text.length <= 80
    ) {
      currentSection = text;
    }
    MODULE_CODE_PATTERN.lastIndex = 0;

    blocks.push({
      text,
      context: normaliseText(`${currentSection} ${parentListContext}`),
    });
  });

  return blocks;
}

function hasChoiceSyntax(block) {
  const moduleCodeCount = (block.match(MODULE_CODE_PATTERN) || []).length;

  return (
    CONDITIONAL_OR_CHOICE_PATTERN.test(block) ||
    /[A-Z]{2,4}%/.test(block) ||
    (block.trim().startsWith("(") && moduleCodeCount > 1) ||
    /\b[A-Z]{2,4}\d{4}[A-Z]{0,3}\s*\/\s*[A-Z]{0,4}?\d{3,4}[A-Z]{0,3}\b/.test(block)
  );
}

function extractFixedModuleCodes(html) {
  const $ = cheerio.load(html);
  const blocks = getTextBlocks($);
  const seen = new Set();
  const moduleCodes = [];

  for (const block of blocks) {
    const matches = block.text.match(MODULE_CODE_PATTERN);
    if (
      !matches ||
      hasChoiceSyntax(block.text) ||
      hasChoiceSyntax(block.context) ||
      SKIPPED_SECTION_PATTERN.test(block.context)
    ) {
      continue;
    }

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

function loadDegreeLinks(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Degree link list not found: ${filePath}`);
  }

  const degreeLinks = readJson(filePath);
  if (!Array.isArray(degreeLinks)) {
    throw new Error("Degree link list must be a JSON array");
  }

  return degreeLinks.map((entry, index) => {
    if (!entry || Array.isArray(entry) || typeof entry !== "object") {
      throw new Error(`Degree link entry ${index + 1} must be an object`);
    }

    const url = typeof entry.url === "string" ? entry.url.trim() : "";
    const code = typeof entry.code === "string" ? entry.code.trim() : "";
    const name = typeof entry.name === "string" ? entry.name.trim() : entry.name;

    if (!url) {
      throw new Error(`Degree link entry ${index + 1} is missing url`);
    }

    if (!code) {
      throw new Error(`Degree link entry ${index + 1} is missing code`);
    }

    if (name !== undefined && typeof name !== "string") {
      throw new Error(`Degree link entry ${index + 1} name must be a string`);
    }

    return {
      url,
      code,
      ...(name ? { name } : {}),
    };
  });
}

function ensureJsonOnlyInput(argv) {
  if (argv.length > 0) {
    throw new Error(
      "Usage: npm run scrape:degree. Configure curriculum links in scripts/degree-links.json.",
    );
  }
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
    throw new Error(`Unknown module code(s): ${unknownModules.join(", ")} for ${degreeName}`);
  }

  const presetData = fs.existsSync(presetPath) ? readJson(presetPath) : {};
  presetData[degreeCode] = {
    degreeName,
    compulsoryModules,
  };
  writeJson(presetPath, presetData);

  return presetData[degreeCode];
}

function defaultPaths(repoRoot = process.cwd()) {
  return {
    degreeLinksPath: path.join(repoRoot, "scripts", "degree-links.json"),
    presetPath: path.join(repoRoot, "src", "data", "degree-presets.json"),
    modulesPath: path.join(repoRoot, "src", "data", "modules.json"),
  };
}

module.exports = {
  ensureJsonOnlyInput,
  extractFixedModuleCodes,
  loadDegreeLinks,
  parseDegreePage,
  updateDegreePresetFile,
  validateModuleCodes,
  defaultPaths,
};
