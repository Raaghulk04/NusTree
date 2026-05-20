const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { PrismaPg } = require('@prisma/adapter-pg');
const pg = require('pg');

const repoRoot = path.resolve(__dirname, '..');
const { PrismaClient } = require(path.join(repoRoot, 'src', 'generated', 'prisma'));

dotenv.config({ path: path.join(repoRoot, '.env') });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error('DATABASE_URL is required to run prisma/seed.js');
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
	const dataPath = path.join(repoRoot, 'src', 'data', 'modules.json');
	const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
	

	// Clean up invisible/ambiguous unicode characters from the entries
    const entries = Object.entries(rawData).map(([code, details]) => {
        const cleanedDetails = {};
        for (const [key, value] of Object.entries(details)) {
            // This regex strips out hidden non-printable unicode control characters
            const cleanKey = key.replace(/[^\x20-\x7E]/g, '').trim(); 
            cleanedDetails[cleanKey] = value;
        }
        return [code.trim(), cleanedDetails];
    });

	console.log(`Start seeding ${entries.length} modules...`);

	for (const [code, details] of entries) {
		const moduleData = {
			title: details.title || 'No Title Provided',
			description: details.description,
			department: details.department ?? null,
			workload: Array.isArray(details.workload)
				? details.workload.reduce((sum, value) => sum + Number(value || 0), 0)
				: null,
			prereqTree: details.prereqTree,
		};

		await prisma.module.upsert({
        where: { id: code },
        update: {
            title: moduleData.title,
            description: moduleData.description,
            prereqTree: moduleData.prereqTree,
            workload: moduleData.workload,
            // ONLY overwrite the department if the JSON actually has a new value for it
            ...(moduleData.department && { department: moduleData.department })
        },
        create: {
            id: code,
            ...moduleData,
        },
    });
	}

	console.log('Seeding finished successfully!');
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
