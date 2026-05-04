const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg'); // You need this for Postgres
const pg = require('pg');
const fs = require('fs');
const path = require('path');

// 1. Setup the connection pool
const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 2. Initialize the client with the adapter
const prisma = new PrismaClient({ adapter });

async function main() {
	const dataPath = path.join(__dirname, 'data.json');
	const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

	// This turns { "ABM5001": {...} } into [ ["ABM5001", {...}] ]
	const entries = Object.entries(rawData);

	console.log(`Start seeding ${entries.length} modules...`);

	for (const [code, details] of entries) {
		await prisma.module.upsert({
			where: { id: code }, // 'code' is the key from your JSON (e.g., "ABM5001")
			update: {},
			create: {
				id: code,
				title: details.title || "No Title Provided",
				description: details.description,
				prereqTree: details.prereqTree,
				// Add other fields here if they exist in your schema
			}
		});
	}

	console.log("Seeding finished successfully!");
}
main()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});




