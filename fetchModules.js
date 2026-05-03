const axios = require("axios");
const fs = require("fs");

const BASE = "https://api.nusmods.com/v2/2025-2026";


async function main() {
	const listRes = await axios.get(`${BASE}/moduleList.json`);
	const modules = listRes.data;
	const result = {};

	for (const mod of modules) {
		const code = mod.moduleCode;

		try {
			const res = await axios.get(`${BASE}/modules/${code}.json`);
			result[code] = res.data;
			console.log("Fetched", code);
		} catch (err) {
			console.log("Failed", code);
		}
	}

	fs.writeFileSync("src/modules.json", JSON.stringify(result, null, 2));
	console.log("Done!");
}

main();


