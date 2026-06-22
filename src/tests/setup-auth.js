import { afterAll, beforeEach } from "vitest";
import prisma from "@/lib/db";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "Auth tests require DATABASE_URL in .env.test. Copy .env.test.example and point it to your test database.",
  );
}

if (!databaseUrl.includes("nustree_test")) {
  throw new Error(
    "Auth tests must use a dedicated test database. DATABASE_URL should point to a database named like 'nustree_test'.",
  );
}

beforeEach(async () => {
  const tables = await prisma.$queryRawUnsafe(`
    SELECT tablename
    FROM pg_tables
    WHERE schemaname = 'public'
  `);

  for (const { tablename } of tables) {
    if (tablename === "_prisma_migrations") {
      continue;
    }

    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE "public"."${tablename}" RESTART IDENTITY CASCADE;`,
    );
  }
});

afterAll(async () => {
  await prisma.$disconnect();
});
