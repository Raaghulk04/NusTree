# NusTree

Milestone 1 scaffold for an NUS academic pathway planner.

## Current Structure

- `src/app`: Next.js pages and API routes
- `src/components`: planner UI building blocks
- `src/server`: application logic for modules and eligibility
- `src/data`: local module seed data and fetched NUSMods snapshots
- `scripts`: one-off data fetch and sync scripts
- `prisma`: Prisma schema, migrations, and seed script

## Prisma Setup

- Prisma config entrypoint: `prisma.config.ts`
- Prisma schema: `prisma/schema.prisma`
- Generated client output: `src/generated/prisma`
- Seed command: `node prisma/seed.js`
- Canonical module seed dataset: `src/data/modules.json`
- Required env var: `DATABASE_URL` in the repo root `.env` file. See `.env.example`.

The seed script only upserts `Module` rows. It does not seed auth tables, users, or planner rows.

## Current Prisma Audit

- The checked-in migration history currently contains one migration: `prisma/migrations/20260504094745_added_prereq_tree/migration.sql`.
- That migration creates `Module`, `MajorTemplate`, and `UserPlanModule`, including `department`, `workload`, and `prereqTree` on `Module`.
- `src/data/modules.json` contains `department` for modules and a five-number `workload` array. The seed script currently stores `department` directly and stores `workload` as the numeric sum of that array so it fits the current `Float?` schema field.
- `prisma/schema.prisma` also declares `User`, `Session`, `Account`, and `Verification` for Better Auth, and runtime auth code already depends on them via `src/lib/db.js` and `src/lib/auth.ts`.
- Those auth models are not represented in the checked-in migration history yet. Treat them as declared in schema and runtime, but not reconciled with migrations in the database baseline.
- `MajorTemplate` is still present in schema and migration history. It is only referenced by placeholder UI in `src/components/major-template-picker.js` and `src/app/planner/page.js`.

## Next Manual Prisma Pass

- Do not edit `prisma/schema.prisma` or migrations in this cleanup baseline.
- The next schema pass should reconcile auth tables with migration history and decide whether `MajorTemplate` remains necessary.

## Next Steps

1. Convert this into a full Next.js app with JavaScript.
2. Install `next`, `react`, `react-dom`, `prisma`, and `@prisma/client`.
3. Replace placeholder API handlers with real module and eligibility logic.
4. Add React Flow once the planner data flow is working.
