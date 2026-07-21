# Planner Change Map

## Scope

The planner page has two independent write flows:

- individual module placement in a selected year and semester
- degree preset selection

The semester timeline is a read-only projection of the module placement data.

## Action Flows

### Add or move a planned module

```text
ModuleTracker (select term)
  -> ModuleSearchDropdown (submit module)
  -> add-planned-module server action (authenticate)
  -> planner.service.upsertUserPlannedModule (validate and persist)
  -> UserPlanModule
  -> PlannerWorkspace refreshes GET /api/planner-modules
  -> PlannedModulesList and SemesterTimeline rerender
```

`UserPlanModule` is unique on `(userId, moduleId)`. Adding the same module in a
different term updates its existing record, so the current behaviour is a move.

### Remove a planned module

```text
PlannedModulesList (Remove)
  -> PlannerWorkspace.handleRemoveModule
  -> remove-planned-module server action (authenticate)
  -> planner.service.removeUserPlannedModule
  -> UserPlanModule delete
  -> PlannerWorkspace refreshes GET /api/planner-modules
```

### Add or remove a degree preset

```text
DegreePresetPicker / DegreePresetSearchDropdown
  -> add/remove planned-degree-preset server action (authenticate)
  -> degree.service.add/removeUserDegreePreset
  -> UserPreset
  -> DegreePresetPicker refreshes degree preset API reads
```

Important: selecting a preset currently creates only a `UserPreset` record. It
does not create `UserPlanModule` records, despite the picker copy referring to
importing compulsory modules. Presets affect eligibility data through
`eligibility.service`, not the planner timeline.

### Prerequisite warnings

`SemesterTimeline` calculates missing earlier prerequisites from `mods` and the
loaded `plannedModules` in the browser. It only displays warnings; it does not
prevent persistence.

## Likely Change Points

| Layer | Files | Use when changing... |
| --- | --- | --- |
| UI | `src/app/planner/page.js`, `src/components/planner-workspace.jsx`, `src/components/module-tracker.jsx`, `src/components/module-search-dropdown.jsx`, `src/components/planned-modules-list.js`, `src/components/semester-timeline.jsx` | planner layout, term selection, add/remove feedback, list/timeline rendering, warnings |
| UI: presets | `src/components/degree-preset-picker.jsx`, `src/components/degree-preset-search-dropdown.jsx` | preset selection, limit display, refresh behaviour |
| API/controller | `src/app/api/planner-modules/route.js`, `src/app/api/degree-presets/route.js`, `src/app/api/user-degree-presets/route.js`, `src/components/add-planned-module.js`, `src/components/remove-planned-module.js`, `src/components/add-planned-degree-preset.js`, `src/components/remove-planned-degree-preset.js` | read contracts, authentication boundary, write entry points |
| Logic | `src/server/planner.service.js`, `src/server/degree.service.js`, `src/server/eligibility.service.js` | validation, upsert/remove semantics, preset limits/imports, eligibility consequences |
| Data | `prisma/schema.prisma`, a new `prisma/migrations/.../migration.sql` if required | record fields, uniqueness, relationships, deletion rules |
| Tests | `src/components/module-tracker.test.jsx`, `src/components/degree-preset-picker.test.jsx`, `src/server/planner.service.test.js`, `src/server/degree.service.test.js` | regression coverage for the affected flow |

## Data Ownership

- `UserPlanModule`: active planner-page module records.
- `UserPreset`: active selected degree presets.
- `DegreePresetModule`: degree preset to compulsory-module mapping.
- `UserAddModule`: used by older graph code, not by the current planner page;
  avoid changing it unless the planned behaviour explicitly includes that graph.

## Change Sizing

- **Placement-only behaviour:** UI, planner server action/service, and planner
  tests. No migration unless the record shape changes.
- **Prerequisite policy:** timeline UI and tests; add planner service validation
  if warnings must become enforced rules.
- **Preset imports into the planner:** picker/action, degree and planner logic,
  `UserPlanModule` semantics, integration tests, and potentially a migration.
