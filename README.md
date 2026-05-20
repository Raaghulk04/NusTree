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
- Better Auth tables are part of the checked-in Prisma migration history.

The seed script only upserts `Module` rows. It does not seed auth tables, users, or planner rows.

Bootstrap order for a fresh local setup:

```bash
cd /home/kopiosiewdai/projects/NusTree
sudo systemctl start postgresql
npx prisma migrate deploy
npx prisma db seed
npx prisma studio
```

You can skip `npx prisma db seed` if you only need the schema, and you can run the app instead of Prisma Studio once migrations are applied.

## Daily Prisma Workflow

Minimal daily restart:

```bash
cd /home/kopiosiewdai/projects/NusTree
sudo systemctl start postgresql
npx prisma studio
```

End-of-day close-down:

1. Stop Prisma Studio with `Ctrl+C` in the terminal where it is running.
2. Stop the Next.js dev server with `Ctrl+C` if it is running.
3. Optionally stop local Postgres if you do not want it left running:

```bash
sudo systemctl stop postgresql
```

## Current Prisma Audit

- The checked-in migration history contains `prisma/migrations/20260504094745_added_prereq_tree/migration.sql` for domain tables, `prisma/migrations/20260519120000_add_better_auth_tables/migration.sql` for Better Auth tables, and `prisma/migrations/20260520120000_planner_schema_revision/migration.sql` for the planner-state revision.
- The current domain schema models `Module`, `DegreePreset`, `DegreePresetModule`, `UserPreset`, and `UserPlanModule`, including `department`, `workload`, and `prereqTree` on `Module`.
- The Better Auth migration creates `user`, `session`, `account`, and `verification`, plus their indexes and foreign keys.
- `src/data/modules.json` contains `department` for modules and a five-number `workload` array. The seed script currently stores `department` directly and stores `workload` as the numeric sum of that array so it fits the current `Float?` schema field.
- `src/data/degree-presets.json` contains local degree preset definitions and compulsory module lists used by `prisma/seed.js`.
- `prisma/schema.prisma` declares `User`, `Session`, `Account`, and `Verification` for Better Auth, and runtime auth code depends on them via `src/lib/db.js` and `src/lib/auth.ts`.
- `UserPlanModule` now stores the current mutable planner state per user and module, with `planYear`, `planSemester`, optional preset tagging, and a unique constraint on `(userId, moduleId)`.

## Next Manual Prisma Pass

- Revisit whether `Module.workload` should remain a single numeric summary or move to a structured breakdown once planner UX needs the original five-part source data.

## Next Steps

1. Convert this into a full Next.js app with JavaScript.
2. Install `next`, `react`, `react-dom`, `prisma`, and `@prisma/client`.
3. Replace placeholder API handlers with real module and eligibility logic.
4. Add React Flow once the planner data flow is working.
