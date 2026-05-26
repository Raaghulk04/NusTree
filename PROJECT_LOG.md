# Project Log

Repo: `NusTree`  
Period covered: May 3, 2026 to May 26, 2026  
Primary contributors: Raaghul, Nicholas

## Week 1: Project Setup and Data Foundation
**Dates:** May 3 to May 9, 2026

### Raaghul
- Created the initial repository and started the core Next.js application setup.
- Fetched and prepared module data needed for the planner.
- Set up Prisma with PostgreSQL for persistent storage.
- Added `prereqTree` into the database schema to support prerequisite logic.
- Stabilized package and dependency setup during the initial bootstrap phase.

### Nicholas
- Initialized the early file structure for the project.
- Converted parts of the scaffold from TypeScript to JavaScript.
- Cleaned up the starter codebase after initial setup.

### Week 1 Outcome
- The project moved from an empty repository to a working app skeleton with a database-backed module model and prerequisite support.

## Week 2: Eligibility Logic and Authentication
**Dates:** May 10 to May 16, 2026

### Raaghul
- Expanded the app structure with eligible module pages, shared UI components, and store setup.
- Got eligible module display working based on prerequisite data.
- Installed and configured `better-auth`.
- Added sign-up and login flows, then fixed early authentication issues.

### Nicholas
- No major standalone commits landed this week, but the project foundation from Week 1 continued to support feature work.

### Week 2 Outcome
- The planner progressed from a data-backed prototype into a usable app with eligibility logic and working user authentication flows.

## Week 3: User Data, Planner Tracking, and Degree Filtering
**Dates:** May 17 to May 23, 2026

### Raaghul
- Integrated users into the database.
- Added completed-module support, including related API routes and planner components.
- Added tracking for completed modules in the planner.
- Fixed missing department and schema relation issues in the module model.
- Introduced a search dropdown and iterated on general and module-specific search flows.
- Added support for retrieving degree presets from the database.
- Added planner-major and degree preset flows for user planning.
- Refined eligible module filtering so results only show modules relevant to selected degrees.
- Added support for user presets and degree-scoped module displays.

### Nicholas
- Cleaned up seed source and documented schema mismatches.
- Fixed local database and migration synchronization issues.
- Fixed TypeScript configuration issues and removed redundant config.
- Added a DBML schema planning file.
- Updated the database schema where needed.
- Fixed a planner bug where a module incorrectly implied `Y1S1`.
- Improved README setup instructions for local development.

### Week 3 Outcome
- The project matured into a user-aware planner with completed-module tracking, degree filtering, better schema consistency, and more reliable local setup.

## Week 4: Graph Visualization, Planner UX Refinement, and Documentation
**Dates:** May 24 to May 26, 2026

### Raaghul
- Installed React Flow and added the first module graph implementation.
- Added nodes and edges for module dependency visualization.
- Integrated Dagre for graph layouting.
- Cleaned up graph rendering and improved module layout behavior.
- Fixed flawed `and/or` prerequisite dependency handling.
- Updated homepage content and removed an unnecessary page.

### Nicholas
- Normalized line endings and refreshed lockfile state for `@xyflow/react`.
- Added a remove button for planned modules.
- Refined planner add/remove flows and removed debug logs.
- Fixed search behavior so modules no longer auto-add unexpectedly.
- Relocated the add button beside the search UI for better usability.
- Updated the README draft.
- Added ER diagram documentation.

### Week 4 Outcome
- The planner gained visual prerequisite mapping, stronger planner interaction flows, and better supporting documentation.

## Overall Contribution Summary

### Raaghul
- Led core product development across app setup, database integration, authentication, eligibility logic, planner tracking, degree preset flows, and graph visualization.

### Nicholas
- Led structural cleanup, schema and migration consistency, planner interaction refinement, and project documentation.

## Overall Project Progress
- NusTree started as a basic Next.js planner prototype backed by Prisma and PostgreSQL.
- It evolved into a user-based module planning system with prerequisite-aware eligibility checks, completed-module tracking, and degree filtering.
- The latest phase introduced graph-based prerequisite visualization and improved planner usability, making the system more interactive and easier to understand.
