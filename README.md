# NusTree

NusTree is a web application for NUS students to plan semester modules, import degree presets, and visualize prerequisite relationships in a single workspace.

## Overview

The project combines:

- authentication and per-user planner state
- module and degree preset data stored in PostgreSQL
- prerequisite-aware planning workflows
- graph-based visualization for module relationships

The current codebase includes the planner, authentication, preset import flow, and foundational graph/eligibility scaffolding. Some API and service layers are still incomplete.

## Tech Stack

- Next.js 16
- React 19
- PostgreSQL
- Prisma
- Better Auth
- React Flow / `@xyflow/react`
- Tailwind CSS

## Features

- Email/password authentication
- Per-user semester planning
- Shared search dropdowns for modules and degree presets
- Degree preset import backed by the database
- Prerequisite graph visualization groundwork

## Project Structure

```text
.
├── prisma/
│   ├── schema.prisma
│   └── seed.js
├── public/
├── src/
│   ├── app/                # Next.js routes, pages, and API handlers
│   ├── components/         # UI components and server actions
│   ├── data/               # local seed data
│   ├── generated/          # generated Prisma client output
│   ├── graph/              # graph-related rendering logic
│   ├── lib/                # shared auth, db, utilities
│   ├── server/             # service layer stubs / backend helpers
│   └── store/              # client-side state
└── docs/
    └── er-diagram.svg
```

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL
- a `.env` file with `DATABASE_URL`

### Installation

```bash
npm install
```

### Database Setup

Apply your Prisma migrations, then seed the database:

```bash
npx prisma migrate dev
npm run seed
```

The seed script loads:

- module data from `src/data/modules.json`
- degree preset data from `src/data/degree-presets.json`

### Updating the Prisma Schema

After changing `prisma/schema.prisma`, create and apply a new migration locally:

```bash
npx prisma migrate dev --name describe-your-change
```

This creates a new migration folder under `prisma/migrations`, applies it to the local database, and regenerates the Prisma client.

If Prisma returns `P3014` because the database user cannot create a shadow database, either grant the local database user permission to create databases or configure a dedicated shadow database. For local development, granting `CREATEDB` is usually simplest:

```sql
ALTER USER your_database_user CREATEDB;
```

If you only want to create the migration file without applying it immediately:

```bash
npx prisma migrate dev --name describe-your-change --create-only
```

After reviewing the generated SQL, apply it:

```bash
npx prisma migrate dev
```

When deploying an existing migration to another environment, use:

```bash
npx prisma migrate deploy
npx prisma generate
```

Restart the app after deployment so it uses the updated Prisma client. Run `npm run seed` only if the schema change also requires updated seed data.

### Run Locally

```bash
npm run dev
```

The app will start on the default Next.js development port.

## Available Scripts

- `npm run dev` - start the Next.js development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint
- `npm run seed` - seed modules and degree presets into PostgreSQL

## Data Model

The main application models are defined in [prisma/schema.prisma](./prisma/schema.prisma):

- `Module`
- `DegreePreset`
- `DegreePresetModule`
- `UserPlanModule`
- `UserPreset`
- auth models: `User`, `Session`, `Account`, `Verification`

An ER diagram is available at [docs/er-diagram.svg](./docs/er-diagram.svg).

## Architecture Notes

### Updating degree presets from curriculum links

Degree presets live in `src/data/degree-presets.json`. If you have a new NUS
curriculum link, run the scraper with a stable degree code:

```bash
npm run scrape:degree -- --url https://www.comp.nus.edu.sg/programmes/ug/cs/curr/ --code computer-science
```

If the page heading does not produce the degree name you want, pass the name
manually:

```bash
npm run scrape:degree -- --url <curriculum-url> --code <degree-code> --name "Computer Science"
```

After checking the updated JSON, seed the database again:

```bash
npm run seed
```

The scraper only keeps fixed compulsory module codes. It intentionally skips
choice requirements, wildcard placeholders such as `GEC%`, and conditional
modules that only apply to some students. To verify scraper behavior, run:

```bash
npm run test:scraper
```

## 10. How I would describe the project overall

## Current Status

Implemented:

- authenticated planner data flow
- planner module retrieval
- degree preset loading and import association
- local seed workflow for modules and presets

Still in progress:

- eligibility API implementation
- module API implementation
- backend service layer completion in `src/server`
- tighter integration between planner state and graph/eligibility flows

## Development Notes

- The repository enforces LF line endings via `.gitattributes`.
- Prisma client output is committed under `src/generated/prisma`.
- Degree presets are expected to come from the database at runtime, not directly from JSON files.

## Contributing

If you are extending the project:

- keep schema changes in `prisma/schema.prisma`
- add or update seed data when introducing new presets or modules
- prefer keeping UI, mutation logic, and persistence concerns separated

## License

No license file is currently included in this repository.
