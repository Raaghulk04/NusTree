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

- `src/app/api` contains route handlers for planner data, presets, auth, and placeholder endpoints.
- `src/components` contains UI components and server-side mutation actions.
- `src/lib/auth.ts` configures Better Auth with the Prisma adapter.
- `src/lib/db.js` provides database access.
- `src/server` currently contains service stubs for eligibility and modules.

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
