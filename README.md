# NusTree

NusTree is a web app for NUS students to plan their academic path in one place. The main idea is to help users stop juggling spreadsheets, module websites, and handwritten notes when deciding what to take and when to take it. Instead of treating planning as just a list of modules, the project tries to connect module search, semester planning, degree presets, and prerequisite relationships into one system.

This README is meant to be a rough first draft, not a final polished report. The goal here is to document what the project currently does, what software engineering ideas it uses, and why the project has meaningful complexity.

## 1. What the project is trying to solve

Academic planning is more complicated than it looks. A student is not only choosing modules they like. They also need to consider:

- prerequisites
- whether prerequisites are `AND` or `OR`
- which semester they want to take a module
- what degree they are following
- what they have already taken or planned

That becomes messy very quickly if everything is tracked manually.

NusTree is meant to solve that by giving the user one place to:

- sign in and save their own data
- search for modules
- add modules into a semester plan
- remove modules from the plan
- import a degree preset
- view a graph of modules and prerequisites

The long-term idea is that this becomes a real planning assistant rather than just a storage page.

## 2. Main features

### Authentication

The app has sign-up and sign-in flows. Authentication is handled with Better Auth and Prisma. This matters because planner data is user-specific, so different users should not see or modify each other’s plans.

At the moment, users can:

- create an account with name, email, and password
- sign in with email and password
- access planner-related flows as an authenticated user

This is one of the foundation features because almost everything else depends on session-aware user state.

### Module planner

The planner is the main feature of the app right now. A user can choose:

- year
- semester
- module code

and add that module into their personal study plan.

Planned modules are stored in the database, so the data survives page refreshes and future logins. The planner also allows users to remove modules they no longer want.

One useful detail is that the planner uses `upsert` behavior when adding a module. That means if the same user adds the same module again, the system updates the year and semester instead of creating duplicates. This keeps planner data simpler and cleaner.

### Search dropdown

The search dropdown is a shared component used in different places. It supports typing, filtering, selecting, and submitting. It was recently adjusted so that:

- search filtering is case-insensitive
- submission requires an exact match or an explicit selection
- it does not accidentally submit the first filtered result by default

This may sound like a small UI detail, but it matters because the search is connected to real state changes. If the dropdown guesses the wrong module, the planner becomes unreliable.

### Degree presets

The project also has degree preset support. A degree preset is basically a stored degree definition that can be associated with the user. Right now the repository includes a Computer Science preset example.

This feature is useful because it gives the planner some academic structure. Instead of starting from a blank page every time, users can connect their plan to a degree context.

The current implementation is still incomplete in some ways, but the core idea is already there:

- presets are stored in the database
- users can import a preset
- the app remembers which presets belong to which user

### Eligibility and graph view

One of the more interesting parts of the project is the eligible modules view. This part tries to determine which modules a user is eligible for based on prerequisite trees, then show those modules in a graph.

The graph uses React Flow and colors nodes differently depending on status. For example:

- completed modules are shown in one color
- eligible modules are shown in another
- locked modules are shown differently again

The graph also highlights prerequisite links and unlock relationships when a user clicks on a node.

This feature is important because a visual graph is much easier to understand than reading raw prerequisite text over and over again.

## 3. Current architecture

The project is built with:

- Next.js
- React
- PostgreSQL
- Prisma
- Better Auth
- React Flow

There is already a rough separation between different responsibilities in the repo:

- `src/app` for routes, pages, and API handlers
- `src/components` for UI and server actions
- `src/lib` for shared setup like auth and database
- `src/graph` for graph rendering logic
- `src/data` for local seed data
- `prisma` for schema, migrations, and seeding

Even though the project is still evolving, this structure already reflects some software engineering thinking. The code is not just thrown into one file or one layer. There is already an attempt to separate frontend rendering, database access, authentication, and data setup.

## 4. Data model

The Prisma schema is an important part of the system.

Main models include:

- `Module`
- `DegreePreset`
- `DegreePresetModule`
- `UserPlanModule`
- `UserPreset`
- auth-related tables like `User`, `Session`, `Account`, and `Verification`

This matters because the application is not storing just one simple list. It has to model:

- global module data
- user-specific planner data
- degree preset relationships
- authentication and session data

`UserPlanModule` is especially important because it connects the user to a module and stores where that module is planned in terms of year and semester.

The schema design already shows that this project is more than a basic CRUD form app.

## 5. Software engineering principles used

### Separation of concerns

The project tries to keep different responsibilities in different places.

For example:

- the search dropdown handles search interaction
- the planner component handles planner UI state
- server actions handle database mutations
- Prisma handles persistence
- auth setup is kept in its own library files

This is useful because it makes the app easier to understand and easier to change later.

### Reusability

There are several reusable parts in the codebase:

- the shared search dropdown
- the shared auth client
- the shared Prisma client

This helps avoid duplicated code and keeps behavior more consistent.

### Defensive validation

The planner mutation logic does not blindly trust the client. It checks for:

- valid authenticated session
- valid year
- valid semester

The search flow also checks that the submitted value really exists in the option list before trying to add it.

That is a good software engineering habit because it reduces the chance of bad data entering the system.

### Idempotent updates

The use of `upsert` in planner addition and preset addition is also a good design choice. It means repeated actions do not easily create duplicate rows. This makes the system more robust and the user experience less fragile.

## 6. Why the project has meaningful complexity

I think the project complexity is justified and not artificial.

If this app were only storing a list of modules, it would be a small CRUD app. But NusTree has more going on:

- user authentication
- relational database design
- per-user planner state
- degree presets
- recursive prerequisite logic
- graph visualization

The prerequisite part alone adds a lot of complexity. Some modules may have nested `AND` and `OR` prerequisite structures. That means eligibility cannot be checked with a simple flat comparison. The code has to walk through prerequisite trees recursively.

The graph also adds complexity because the system has to:

- group modules by level
- compute some form of layout
- decide node colors and styles
- reconstruct edges from prerequisite data

That is not just visual decoration. It is logic-heavy transformation work.

## 7. Rough complexity discussion

This section is not meant to be mathematically perfect, just a reasonable explanation.

### Search

The search dropdown filters the list of options as the user types. In a simple sense, that is roughly `O(n)` for each keystroke, where `n` is the number of options being searched.

That is acceptable for the current project size.

### Planner operations

Fetching and rendering planner rows is mostly straightforward. The complexity depends on:

- how many planner rows the user has
- database query cost
- UI render cost

Since planner rows are indexed by user and ordering fields, the current database approach is reasonable for this stage.

### Eligibility checking

Eligibility checking is more interesting. The system may need to inspect a prerequisite tree for many modules. That means the cost grows with:

- how many modules are being checked
- how complicated each prerequisite tree is

So even though the exact complexity depends on the tree structure, it is clearly more complex than checking a simple boolean flag.

### Graph generation

The graph rendering logic does several passes over module data and also uses recursive checks. In practice, this can become fairly expensive compared to ordinary page rendering, especially as the number of modules grows.

Still, this complexity is understandable because the feature itself is much richer than a normal list view.

## 8. Current limitations

This is still a work-in-progress project, so there are some obvious limitations.

- some API routes are still placeholders
- `src/server/eligibility.service.js` and `src/server/module.service.js` are basically stubs
- the degree preset feature is only partially realized
- some parts of the project still contain debug logging
- the planner page and the graph flow are not fully unified yet

I think it is better to say this clearly instead of pretending the whole system is already fully polished.

## 9. Setup notes

To run the project locally, the main requirements are:

- Node.js
- npm
- PostgreSQL
- a valid `DATABASE_URL` in `.env`

Basic setup flow:

```bash
npm install
sudo systemctl start postgresql
npx prisma migrate deploy
npx prisma db seed
npm run dev
```

Useful routes:

- `/signup`
- `/signin`
- `/planner`
- `/eligibleMods`

The seed process loads module data and degree preset data into the database.

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

NusTree is a valid software engineering project because it combines frontend, backend, persistence, auth, and domain logic in one system. It is not just a static website and not just a simple form-based tracker.

What makes it interesting is that the project has to deal with both:

- normal web app concerns like authentication and CRUD
- domain-specific concerns like prerequisites, module relationships, and study planning

That is where most of the meaningful complexity comes from.

At its current stage, I would describe the project as a solid foundation with a few strong implemented ideas:

- persistent module planning
- reusable search interaction
- degree preset support
- graph-based module visualization

and also a few areas that clearly still need more work:

- moving more business logic into proper services
- strengthening the eligibility pipeline
- improving testing
- polishing the UI and documentation further

## 11. Final note

This README is intentionally written like a rough first draft. It is shorter and more direct than a final report would be, but it still documents the main points:

- what NusTree does
- why it exists
- what engineering ideas it uses
- why the complexity is justified
- what still needs improvement

If needed later, this can be expanded into a more formal submission by adding screenshots, diagrams, user stories, and more precise testing details.
