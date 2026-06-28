# Unit Testing Suggestions

This document lists suggested unit-test targets for the current NusTree codebase. For each component, it identifies related files and the behaviours that should be tested.

Existing tests:

- `src/server/eligibility.service.test.js`
- `src/graph/missingmods.test.js`

## Authentication

Related files:

- `src/lib/auth.ts`
- `src/lib/auth-client.ts`
- `src/server/session.service.js`
- `src/app/api/auth/[...all]/route.ts`
- `src/components/login-form.jsx`
- `src/components/signup-form.jsx`
- `src/components/navbar.jsx`
- `src/app/login/page.jsx`
- `src/app/signin/page.js`
- `src/app/signup/page.jsx`
- `src/app/settings/page.jsx`
- `prisma/schema.prisma`

Behaviours to test:

- `getCurrentSession` calls `auth.api.getSession` with request headers from `next/headers`.
- `getCurrentUserId` returns the session user ID when a session exists.
- `getCurrentUserId` returns `null` when the user is not logged in.
- `requireCurrentUserId` returns the user ID for authenticated users.
- `requireCurrentUserId` throws `"Not logged in"` when no user is authenticated.
- Login form calls `authClient.signIn.email` with the entered email and password.
- Login form displays the returned auth error message when sign-in fails.
- Login form navigates to `/planner` when sign-in succeeds.
- Signup form blocks submission when password and confirmation do not match.
- Signup form calls `authClient.signUp.email` with name, email, and password when input is valid.
- Signup form displays the returned auth error message when sign-up fails.
- Signup form navigates to `/signin` when sign-up succeeds.
- Navbar calls `authClient.signOut` when logging out.
- Navbar redirects to `/` after logout.
- Better Auth route exports both `GET` and `POST` handlers.

## Eligibility Service

Related files:

- `src/server/eligibility.service.js`
- `src/server/eligibility.service.test.js`
- `src/server/module.service.js`
- `src/server/degree.service.js`
- `src/server/planner.service.js`
- `src/app/api/eligibility/route.js`
- `src/app/eligibleMods/page.js`
- `src/app/eligibleMods/eligibleModsClient.js`
- `src/components/semester-timeline.jsx`

Behaviours to test:

- `isPrereqTreeSatisfied` returns `true` when a module has no prerequisite tree.
- String prerequisites such as `"CS1010S:D"` are satisfied when `completedModuleIds` contains `"CS1010S"`.
- String prerequisites return `false` when the required module ID is missing.
- `or` trees return `true` when at least one child is satisfied.
- `or` trees return `false` when no child is satisfied.
- `and` trees return `true` only when every child is satisfied.
- Nested `and` and `or` prerequisite trees are evaluated correctly.
- Unknown tree shapes default to `true`, matching the current implementation.
- `getEligibleModulesForDegrees` filters out modules whose prerequisites are not satisfied.
- `getEligibleModulesForDegrees` only returns modules whose `department` matches a selected degree name.
- `getEligibleModulesForDegrees` uses user planned modules as completed module IDs.
- `getModulesForDegrees` returns only modules from the selected degree departments.
- `getEligibleModulesPageData` combines modules, degree preset IDs, degree summaries, planned modules, compulsory module IDs, eligible modules, and degree modules into the expected response shape.
- `getEligibleModulesPageData` calls its dependency services with the supplied `userId`.

## Academic Planner

Related files:

- `src/server/planner.service.js`
- `src/components/add-planned-module.js`
- `src/components/remove-planned-module.js`
- `src/components/planned-modules-list.js`
- `src/components/module-tracker.js`
- `src/components/semester-timeline.jsx`
- `src/app/planner/page.js`
- `src/app/api/planner-modules/route.js`
- `src/app/api/majors-taken/route.js`
- `src/graph/simple.jsx`
- `src/store/useModuleStore.js`
- `prisma/schema.prisma`

Behaviours to test:

- `upsertUserPlannedModule` converts string `planYear` and `planSemester` values into numbers before writing.
- `upsertUserPlannedModule` rejects non-integer, missing, zero, or negative plan years.
- `upsertUserPlannedModule` only accepts semester `1` or `2`.
- `upsertUserPlannedModule` upserts using the compound `userId_moduleId` key.
- New planned modules are created with `isPresetModule: false`.
- Existing planned modules update only the normalized plan term.
- `getUserPlannedModules` fetches only modules for the given user.
- `getUserPlannedModules` sorts by `planYear`, then `planSemester`, then `moduleId`.
- `removeUserPlannedModule` deletes only records matching both `userId` and `moduleId`.
- `upsertUserAddModule` applies the same validation and normalization rules as planned modules.
- `getUserAddModules` fetches and sorts added modules by year, semester, and module ID.
- `addPlannedModule` requires a current user before calling `upsertUserPlannedModule`.
- `removePlannedModule` requires a current user before calling `removeUserPlannedModule`.
- Planner API routes return a `401` response when there is no authenticated user.
- Planner API routes pass the authenticated user ID into planner service calls.

## Prerequisite Tree Utilities

Related files:

- `src/graph/missingmods.js`
- `src/graph/missingmods.test.js`
- `src/graph/buildTree.js`
- `src/graph/findEdgeType.js`
- `src/graph/complexitycheck.js`
- `src/graph/basic.jsx`
- `src/graph/simple.jsx`
- `src/graph/graph.jsx`
- `src/components/ModuleNode.jsx`
- `src/components/customNode.jsx`
- `src/components/junctionNode.jsx`

Behaviours to test:

- `MissingMods` returns an empty array when there is no prerequisite tree.
- `MissingMods` returns an empty array when a string prerequisite is already completed.
- `MissingMods` returns the missing module code when a string prerequisite is not completed.
- `MissingMods` strips suffixes after `:` and wildcard `%` characters.
- `MissingMods` flattens `and` trees into a list of missing requirements.
- `MissingMods` returns an empty array for an `or` tree when any option is already satisfied.
- `MissingMods` returns grouped alternatives for an unsatisfied `or` tree.
- `findEdgeType` returns `"and"` for dependencies found under an `and` branch.
- `findEdgeType` returns `"or"` for dependencies found under an `or` branch.
- `findEdgeType` returns `null` for missing modules, string-only trees, and empty trees.
- `findEdgeType` handles nested prerequisite trees.
- `buildTree` creates an AND edge for a direct string prerequisite.
- `buildTree` creates OR junction nodes when multiple OR alternatives are visible in the graph.
- `buildTree` does not create edges for prerequisites outside `allModIds`.
- `buildTree` does not duplicate edges when the same edge ID already exists.
- `buildTree` strips `:` suffixes and `%` wildcards from module IDs.
- `buildTree` collapses a single visible OR option into a direct AND-style edge.
- `buildTree` calculates junction positions from `nodePositions` when available.
- `buildTree` falls back to a target-relative junction position when child positions are missing.
- `checkPrereqComplexity` identifies OR branches containing nested AND branches.

## Graph Layout Helpers

Related files:

- `src/graph/layoutUtils.js`
- `src/graph/useDropHandler.js`
- `src/graph/basic.jsx`
- `src/graph/simple.jsx`
- `src/graph/graph.jsx`
- `src/graph/modeToggle.jsx`
- `src/graph/legend.jsx`
- `src/components/module-graph.js`
- `src/components/ModuleNode.jsx`

Behaviours to test:

- `extractMods` returns an empty array for missing prerequisite trees.
- `extractMods` extracts module IDs from string prerequisites.
- `extractMods` strips `:` suffixes and `%` wildcards.
- `extractMods` recursively extracts module IDs from nested `and` and `or` trees.
- `getModuleLevel` returns level buckets such as `"1000"`, `"2000"`, and `"3000"`.
- `getModuleLevel` returns an empty string when no number is present.
- `getModulePrefix` extracts alphabetic prefixes such as `"CS"` and `"MA"`.
- `getModulePrefix` returns an empty string when no prefix is present.
- `getDirectPrerequisites` returns unique direct prerequisite IDs for a module.
- `getDirectPrerequisites` returns an empty array when the module is missing from the map.
- `getDirectDependents` returns modules whose prereq tree includes the selected module.
- `getPrerequisiteClosure` recursively returns all transitive prerequisites.
- `getPrerequisiteClosure` avoids infinite loops when prerequisite relationships repeat.
- `getModuleNeighborhood` returns the selected module, extra IDs, prerequisite closure, and direct dependents.
- `getModuleNeighborhood` returns an empty set when no module is selected.
- `computeNodePositions` returns an `(x, y)` position for each visible module.
- `computeNodePositions` ignores prerequisite edges pointing to modules outside the visible set.
- `computeNodePositions` anchors positions around `anchorId` when supplied.
- `useDropHandler` prevents default drag-over behaviour and sets `dropEffect` to `"move"`.
- `useDropHandler` ignores empty drag payloads.
- `useDropHandler` parses valid dropped module JSON and calls `handleNewNodeDrop` with flow coordinates.
- `useDropHandler` does not call `handleNewNodeDrop` when the dropped JSON is invalid.

## Preclusion Logic

Related files:

- `src/server/planner.service.js`
- `src/graph/isPreclusion.js`
- `src/app/api/preclusions/route.js`
- `src/components/semester-timeline.jsx`
- `src/components/module-tracker.js`
- `src/data/modules.json`
- `prisma/schema.prisma`

Behaviours to test:

- `getUserPrecludedModuleIds` queries only planned modules for the given user.
- `getUserPrecludedModuleIds` selects only the related module `preclusion` field.
- `getUserPrecludedModuleIds` returns an empty array when a planned module has no preclusion string.
- `getUserPrecludedModuleIds` extracts module codes from preclusion text.
- `getUserPrecludedModuleIds` supports module codes with two or three letter prefixes.
- `getUserPrecludedModuleIds` supports module codes with trailing letters, such as `"CS1010S"`.
- `getUserPrecludedModuleIds` ignores non-module-code text in a preclusion string.
- `isPrecluded` fetches `/api/preclusions`.
- `isPrecluded` removes taken modules whose IDs are returned by the preclusion API.
- `isPrecluded` removes compulsory modules whose IDs are returned by the preclusion API.
- `isPrecluded` keeps completed modules unchanged.
- `isPrecluded` returns completed modules followed by filtered compulsory modules and filtered taken modules.
- Preclusions API route returns `401` when there is no authenticated user.
- Preclusions API route returns the current user preclusion list when authenticated.

## Degree Service

Related files:

- `src/server/degree.service.js`
- `src/components/add-planned-major.js`
- `src/components/degree-preset-picker.jsx`
- `src/components/major-search-dropdown.jsx`
- `src/app/api/allDegreePreset/route.js`
- `src/app/api/getUserDegree/route.js`
- `src/data/degree-presets.json`
- `prisma/schema.prisma`
- `prisma/seed.js`
- `scripts/degree-scraper.js`
- `scripts/scrape-degree-preset.js`

Behaviours to test:

- `getAllDegreePresets` returns the result of `prisma.degreePreset.findMany`.
- `getUserDegreePresets` fetches presets for the supplied user ID.
- `getUserDegreePresets` includes each degree preset.
- `getUserDegreePresets` includes preset module links and linked module details.
- `addUserDegreePreset` looks up the degree preset by `degreeCode`.
- `addUserDegreePreset` throws `"Degree preset not found"` when the degree code is invalid.
- `addUserDegreePreset` upserts using the compound `userId_degreePresetId` key.
- `addUserDegreePreset` creates a user preset with the authenticated user ID and resolved degree preset ID.
- `addUserDegreePreset` does not duplicate an existing user preset.
- `getUserDegreePresetSummaries` returns only the nested `degreePreset` objects.
- `getUserDegreePresetIds` returns only preset IDs.
- `getCompulsoryModuleIdsForPresets` queries `degreePresetModule` with an `in` filter.
- `getCompulsoryModuleIdsForPresets` returns only module IDs.
- `addPlannedMajor` requires a current user before calling `addUserDegreePreset`.
- Public all-degree-preset API route returns all degree presets.
- Authenticated user-degree API route returns only the current user's degree presets.

## API Route Authorization

Related files:

- `src/server/session.service.js`
- `src/app/api/eligibility/route.js`
- `src/app/api/planner-modules/route.js`
- `src/app/api/majors-taken/route.js`
- `src/app/api/getUserDegree/route.js`
- `src/app/api/preclusions/route.js`
- `src/app/api/modules/route.js`
- `src/app/api/allDegreePreset/route.js`
- `src/app/api/auth/[...all]/route.ts`

Behaviours to test:

- Protected routes call `getCurrentUserId`.
- Protected routes return status `401` with `{ error: "Not logged in" }` when `getCurrentUserId` returns `null`.
- Protected routes do not call downstream services when the user is not authenticated.
- `POST /api/eligibility` calls `getEligibleModulesPageData` with the authenticated user ID.
- `GET /api/planner-modules` calls `getUserPlannedModules` with the authenticated user ID.
- `GET /api/majors-taken` calls `getUserPlannedModules` with the authenticated user ID.
- `GET /api/getUserDegree` calls `getUserDegreePresets` with the authenticated user ID.
- `GET /api/preclusions` calls `getUserPrecludedModuleIds` with the authenticated user ID.
- Public `GET /api/modules` does not require authentication and returns `getModules`.
- Public `GET /api/allDegreePreset` does not require authentication and returns `getAllDegreePresets`.
- Auth route exposes Better Auth's generated `GET` and `POST` handlers.

## Recommended Test File Additions

- `src/server/session.service.test.js`
- `src/server/planner.service.test.js`
- `src/server/degree.service.test.js`
- `src/server/eligibility.service.test.js` expanded with filtering and page data tests
- `src/graph/buildTree.test.js`
- `src/graph/findEdgeType.test.js`
- `src/graph/layoutUtils.test.js`
- `src/graph/isPreclusion.test.js`
- `src/app/api/eligibility/route.test.js`
- `src/app/api/planner-modules/route.test.js`
- `src/app/api/getUserDegree/route.test.js`
- `src/app/api/preclusions/route.test.js`
