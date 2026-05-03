import axios from "axios";
import fs from "fs";
import path from "path";

const BASE = "https://api.nusmods.com/v2/2025-2026";
const OUTPUT_PATH = path.join(process.cwd(), "src/data/modules.json");

async function main() {
  const listRes = await axios.get(`${BASE}/moduleList.json`);
  const modules = listRes.data;
  const result: Record<string, unknown> = {};

  for (const mod of modules) {
    const code = mod.moduleCode;

    try {
      const res = await axios.get(`${BASE}/modules/${code}.json`);
      result[code] = res.data;
      console.log("Fetched", code);
    } catch {
      console.log("Failed", code);
    }
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2));
  console.log("Done!");
}

main();

