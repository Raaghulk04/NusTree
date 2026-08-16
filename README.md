# NusTree

NusTree is a high-performance, interactive curriculum graph visualization and 4-year degree planning platform engineered for National University of Singapore (NUS) undergraduates. It translates complex, multi-tiered academic prerequisite rules into real-time DAG (Directed Acyclic Graph) visualizations, validates semester-by-semester course eligibility, and synchronizes graduation pathways.

---

## Table of Contents

- [1. Feature Overview](#1-feature-overview)
- [2. Tech Stack Architecture](#2-tech-stack-architecture)
- [3. Core Algorithms & Data Structures](#3-core-algorithms--data-structures)
  - [3.1 Prerequisite Expression Tree Parsing & Reduction](#31-prerequisite-expression-tree-parsing--reduction)
  - [3.2 Synthetic Hyperedge Decomposition (OR Junctions)](#32-synthetic-hyperedge-decomposition-or-junctions)
  - [3.3 Hierarchical DAG Layout & Horizontal Sublayer Binning](#33-hierarchical-dag-layout--horizontal-sublayer-binning)
  - [3.4 Transitive Prerequisite Closure & Reverse Dependency Indexing](#34-transitive-prerequisite-closure--reverse-dependency-indexing)
  - [3.5 Chronological Term Simulation & State Classification](#35-chronological-term-simulation--state-classification)
  - [3.6 Deterministic AST Curriculum Scraping](#36-deterministic-ast-curriculum-scraping)
- [4. Architectural Design Choices](#4-architectural-design-choices)
- [5. Key Engineering Tradeoffs](#5-key-engineering-tradeoffs)
- [6. Key Learnings & Engineering Insights](#6-key-learnings--engineering-insights)
- [7. Data Model & Database Schema](#7-data-model--database-schema)
- [8. Getting Started](#8-getting-started)
- [9. Testing Strategy](#9-testing-strategy)

---

## 1. Feature Overview

- **Interactive Prerequisite DAG Canvas**: Visualizes module dependency graphs with custom node/edge renderers powered by React Flow, featuring smooth zoom/pan, contextual dependency highlighting, and real-time layout recalculations.
- **Dual Visual Modes (Focus vs. Full)**:
  - *Focus Mode*: Isolates any selected target course, traversing its upstream transitive prerequisite tree and downstream dependent unlocks while anchoring the target at the origin coordinate.
  - *Full / Simple Mode*: Provides a bird's-eye view of all curriculum modules, color-coded by degree status, completion, and eligibility.
- **Ghost Prerequisite Synthesis**: Automatically detects missing prerequisite courses not present in the user's active canvas, projecting them as translucent, dashed "Ghost Nodes" with direct lineage edges.
- **Interactive 4-Year Semester Timeline**: Drag-and-drop course planning from Y1S1 to Y5S2 with immediate warning detection for prerequisite violations and out-of-order scheduling.
- **Time-Traveling Eligibility Engine**: Allows students to select future terms (e.g., Year 3 Semester 1) to simulate historical completions and preview unlockable modules in upcoming semesters.
- **Deterministic NUSMods JSON Importer**: Parses official NUSMods export files, maps academic years to sequential degree terms, handles deduplication, and reconciles unknown module codes before database persistence.
- **Automated Curriculum Preset Scraper**: Cheerio-based headless scraper that processes official faculty curriculum websites, strips out ambiguous electives, and produces clean degree presets for one-click import.

---

## 2. Tech Stack Architecture

```mermaid
flowchart TD
    Client["Client (Browser)"]
    
    subgraph UI_Layer["UI & Visualization Layer"]
        ReactFlow["@xyflow/react (Graph Canvas)"]
        Dagre["@dagrejs/dagre (Layout Engine)"]
        Components["Radix UI & Tailwind CSS"]
        AuthClient["Better Auth Client"]
    end

    subgraph App_Layer["Next.js App Router (Fullstack)"]
        ServerActions["Server Actions / Route Handlers"]
        PrereqEngine["Prerequisite & Eligibility Services"]
        ImportService["NUSMods Import Service"]
        SessionService["Session & Auth Service"]
    end

    subgraph Data_Layer["Persistence & Ingestion Layer"]
        Prisma["Prisma ORM (@prisma/client)"]
        Postgres[("PostgreSQL Database")]
        Scraper["Cheerio Curriculum Scraper"]
    end

    Client --> UI_Layer
    UI_Layer --> App_Layer
    App_Layer --> Data_Layer
    Scraper --> Data_Layer
```

### Core Technologies

| Layer | Technologies | Purpose / Justification |
|---|---|---|
| **Frontend Framework** | Next.js 16 (App Router), React 19 | Server-side rendering for initial load, fast route handling, and React 19 concurrent features. |
| **Graph Visualization** | `@xyflow/react` (React Flow 12) | High-performance canvas node/edge rendering, viewport transformations, and custom SVG DOM nodes. |
| **Graph Layout Engine** | `@dagrejs/dagre` | Layered directed graph layout computation based on Sugiyama's heuristic framework. |
| **Styling & Icons** | Tailwind CSS v4, Radix UI, Lucide Icons | Fluid design tokens, accessible UI primitives, and dark-theme canvas controls. |
| **State Management** | Zustand, React Custom Hooks | Ephemeral UI states, drag-and-drop transfers, and memoized dependency closures. |
| **Authentication** | Better Auth | Session handling, secure password hashing, and cookie-based auth tokens. |
| **Database & ORM** | PostgreSQL, Prisma ORM (`@prisma/client`) | Relational integrity, foreign key cascading, and ACID transactions. |
| **Web Scraping** | Cheerio, Axios | Headless HTML DOM parsing and regex-based AST extraction for faculty curriculum pages. |
| **Testing** | Vitest, React Testing Library, JSDOM | Multi-project test pipeline supporting fast unit tests, DOM tests, and DB integration tests. |

---

## 3. Core Algorithms & Data Structures

```mermaid
flowchart LR
    A["Raw Module JSON<br/>(Prereq Trees)"] --> B["Expression Tree Parser<br/>(buildTree.js)"]
    B --> C["Transitive Closure &<br/>Ghost Synthesizer"]
    C --> D["Dagre Layout +<br/>Sublayer Binning"]
    D --> E["Term-Indexed<br/>Simulation Engine"]
    E --> F["Canvas Node & Edge<br/>State Dispatch"]
```

### 3.1 Prerequisite Expression Tree Parsing & Reduction

NUS prerequisite relationships are non-linear Boolean expressions containing nested logical conjunctions (`AND`), disjunctions (`OR`), and count thresholds (`nOf`).

#### Data Structure
Prerequisites are stored and processed as recursive N-ary abstract syntax trees:

```json
{
  "and": [
    "CS1231S",
    {
      "or": [
        "CS1010",
        "CS1010E",
        "CS1010S",
        "CS1010X"
      ]
    }
  ]
}
```

#### Evaluation Rules
In [`buildTree.js`](file:///home/raaghul/orbital/NusTree/src/graph/buildTree.js) and [`eligibility.service.js`](file:///home/raaghul/orbital/NusTree/src/server/eligibility.service.js), prerequisite satisfaction is evaluated recursively using depth-first tree traversal:

- **Leaf Node (Module Code)**: Satisfied if `normalize(code)` exists in the completed set $C$.
- **AND Node**: Satisfied if **all** child nodes evaluate to `true`.
- **OR Node**: Satisfied if **at least one** child node evaluates to `true`.
- **nOf Node**: Satisfied if at least $N$ child nodes evaluate to `true`.

Where `normalize(m)` strips wildcard characters (e.g., `ACC1701%` $\to$ `ACC1701`) and specialization suffixes (e.g., `CS1010:D` $\to$ `CS1010`).

#### Dead-Branch Pruning
To prevent canvas clutter and unnecessary node rendering, `hasAnyModInSet(node, visibleSet)` prunes disjunctive branches during tree construction if no descendants exist in the current visible set:

```javascript
function hasAnyModInSet(node, set) {
  if (!node) return false;
  if (typeof node === "string") return set.has(node.split(":")[0].replace("%", ""));
  if (node.and) return node.and.some((child) => hasAnyModInSet(child, set));
  if (node.or) return node.or.some((child) => hasAnyModInSet(child, set));
  return false;
}
```

---

### 3.2 Synthetic Hyperedge Decomposition (OR Junctions)

Standard graph renderers natively support 1-to-1 binary directed edges $(u \to v)$. However, an `OR` prerequisite represents a directed hyperedge $(\{u_1, u_2, \dots, u_k\} \to v)$ where satisfaction of *any* source satisfies the target.

#### Synthetic Junction Node Synthesis
In [`buildTree.js`](file:///home/raaghul/orbital/NusTree/src/graph/buildTree.js), NusTree decomposes hyperedges by injecting synthetic centroid junction nodes:
1. When $|T.\text{or}| > 1$, allocate a deterministic junction identifier:
   `junctionId = "junction-or-" + targetId + "-" + sortedChildIds`
2. Compute the geometric centroid position $(X_j, Y_j)$ based on child coordinates:
   - $X_j = \frac{1}{2} \cdot \left( X_{\text{target}} + \frac{1}{k}\sum_{i=1}^k X_{u_i} \right)$
   - $Y_j = \frac{1}{k}\sum_{i=1}^k Y_{u_i}$
3. Connect all alternative prerequisite courses to the junction node $(u_i \to J)$, and route a single edge from the junction to the target $(J \to v)$.

---

### 3.3 Hierarchical DAG Layout & Horizontal Sublayer Binning

Standard Sugiyama layouts generated by Dagre can become excessively wide when dozens of introductory 1000-level courses share topological rank 0 with no upstream dependencies.

```mermaid
flowchart TD
    subgraph Raw_Dagre["Raw Dagre Layout"]
        R1["CS1101S"] --> R2["CS1231S"] --> R3["MA1521"] --> R4["MA2001"] --> R5["IS1108"]
    end
    
    subgraph NusTree_Binning["NusTree Alternating Sub-layering"]
        direction TB
        subgraph Layer_0["Sublayer 0 (Max 7 Nodes)"]
            L1["CS1101S"] --- L2["CS1231S"] --- L3["MA1521"] --- L4["MA2001"]
        end
        subgraph Layer_1["Sublayer 1 (Offset Shift)"]
            L5["IS1108"] --- L6["GEA1000"]
        end
        Layer_0 -.-> Layer_1
    end
```

#### Layout Pipeline
In [`layoutUtils.js`](file:///home/raaghul/orbital/NusTree/src/graph/layoutUtils.js) and [`focusLayoutUtils.js`](file:///home/raaghul/orbital/NusTree/src/graph/focusLayoutUtils.js):
1. **Dagre Phase**: Construct `dagre.graphlib.Graph` with `rankdir: "TB"`, `ranksep: 115`, `nodesep: 30`, and run tight-tree rank assignment.
2. **Row Grouping**: Quantize continuous Dagre $y$-coordinates into discrete ranks using tolerance threshold $\epsilon = 8\text{px}$:
   $|y_1 - y_2| \le \text{ROW\_GROUP\_TOLERANCE}$
3. **Lexicographical & Level Sorting**: Order nodes within each row by academic level (1000, 2000, 3000, 4000), course prefix, and alphanumeric code.
4. **Horizontal Sublayer Partitioning**: Partition rows with length $> 7$ into sublayers with alternating horizontal offset shifts.
5. **Anchor Normalization**: In Focus Mode, normalize all node positions relative to the selected anchor node $A$ so $X_A = 0$.

---

### 3.4 Transitive Prerequisite Closure & Reverse Dependency Indexing

In [`focus.jsx`](file:///home/raaghul/orbital/NusTree/src/graph/focus.jsx) and [`layoutUtils.js`](file:///home/raaghul/orbital/NusTree/src/graph/layoutUtils.js):

#### Upstream Transitive Closure ($O(V + E)$)
Finds all direct and indirect ancestors required to unlock a target module $m$. When an `OR` branch is encountered:
- If any disjunctive child is already satisfied, the traversal branches *only* into the satisfied child.
- If unsatisfied, the traversal branches into *all* possible choices, surfacing them as ghost requirements.

```javascript
export const getDeepPrereqIds = (treeNode, prereqMap, prereqIds, completedIdSet) => {
  if (!treeNode) return;
  if (typeof treeNode === "string") {
    const code = treeNode.split(":")[0].replace("%", "");
    if (!prereqIds.has(code)) {
      prereqIds.add(code);
      if (!completedIdSet.has(code)) {
        const nextTree = prereqMap?.get(code);
        if (nextTree) getDeepPrereqIds(nextTree, prereqMap, prereqIds, completedIdSet);
      }
    }
    return;
  }
  if (treeNode.and) {
    treeNode.and.forEach((child) => getDeepPrereqIds(child, prereqMap, prereqIds, completedIdSet));
  }
  if (treeNode.or) {
    const satisfied = treeNode.or.filter((c) => isSatisfied(c, completedIdSet));
    const targetBranches = satisfied.length > 0 ? satisfied : treeNode.or;
    targetBranches.forEach((child) => getDeepPrereqIds(child, prereqMap, prereqIds, completedIdSet));
  }
};
```

#### Inverted Downstream Indexing
Constructs an adjacency list of downstream dependents $\text{Dep}(u) = \{ v \mid u \in \text{Prereqs}(v) \}$ in linear $O(|V| \cdot d)$ time, enabling instantaneous lookup of unlocked courses upon clicking any node.

---

### 3.5 Chronological Term Simulation & State Classification

In [`termUtils.js`](file:///home/raaghul/orbital/NusTree/src/graph/termUtils.js) and [`moduleStatus.js`](file:///home/raaghul/orbital/NusTree/src/graph/moduleStatus.js):

#### Monotonic Term Quantization
Academic terms are mapped to linear order indices:
$$\text{TermIndex}(\text{Year}, \text{Sem}) = 10 \times \text{Year} + \text{Sem}$$

#### Term-by-Term State Classification Simulation
Given a selected view term $T_{\text{sel}}$, modules planned in past terms ($T_{\text{plan}} < T_{\text{sel}}$) are evaluated in strict chronological order. At each step:
1. Check if the module's prerequisite tree is satisfied by the accumulated completion set $C$.
2. If satisfied, add module to $C$.
3. If unsatisfied, flag module in $\text{WarningSet}$ (prerequisite violation).

#### 4-State Visual Lifecycle

| State Code | Status | Visual Styling | Condition |
|---|---|---|---|
| `-1` | `notInGraph` | Hidden / Excluded | Course not in user curriculum. |
| `0` | `locked` | Gray background (`#e5e7eb`), thin gray border | Prerequisites unsatisfied for current term. |
| `1` | `eligible` | Light blue background (`#93c5fd`), blue border (`#3b82f6`) | All prerequisites satisfied; available to take. |
| `2` | `completed` | Light green background (`#86efac`), green border (`#22c55e`) | Completed in a preceding semester. |
| `3` | `invalid` | Amber background (`#fde68a`), dashed yellow border (`#d97706`) | Planned in calendar but prerequisite sequence is broken. |

---

### 3.6 Deterministic AST Curriculum Scraping

Faculty websites often format requirements in complex HTML tables, nested lists, and narrative footnotes.

In [`scripts/degree-scraper.js`](file:///home/raaghul/orbital/NusTree/scripts/degree-scraper.js):
1. **Root Isolation**: Identifies the primary content block containing degree tables while purging navigation bars, scripts, and footers.
2. **Context-Stack Hierarchy**: Traverses DOM tree elements (`h2-h4`, `tr`, `li`), building a continuous breadcrumb string (e.g., `"Computer Science Foundation > Programming Methodology"`).
3. **Choice & Condition Filtering**: Applies negative regex assertions (`CONDITIONAL_OR_CHOICE_PATTERN`) to reject elective pools, wildcard blocks (`GEC%`), and GPA-conditional requirements, ensuring only 100% compulsory degree requirements are ingested into degree presets.

---

## 4. Architectural Design Choices

```mermaid
erDiagram
    User ||--o{ UserPlanModule : "plans"
    User ||--o{ UserPreset : "imports"
    DegreePreset ||--o{ UserPreset : "selected_by"
    DegreePreset ||--o{ DegreePresetModule : "contains"
    Module ||--o{ DegreePresetModule : "part_of"
    Module ||--o{ UserPlanModule : "referenced_in"

    User {
        string id PK
        string email
        string name
    }
    Module {
        string id PK
        string title
        json prereqTree
        string preclusion
    }
    DegreePreset {
        string id PK
        string degreeCode
        string degreeName
    }
    UserPlanModule {
        string id PK
        string userId FK
        string moduleId FK
        int planYear
        int planSemester
    }
```

### 1. Separation of Persistent State vs. Ephemeral Canvas Projections
- Database tables (`UserPlanModule`, `UserPreset`) store only minimal relational references (User ID, Module ID, Year, Semester).
- Graph topologies, node coordinates, ghost prerequisites, and junction hyperedges are calculated dynamically on the client using memoized selectors, preventing stale layout data in the database.

### 2. Centroid Hyperedge Junctions Over Bipartite Graphing
- Rather than rendering a full bipartite graph (which would double the total node count on screen), hyperedges are only rendered dynamically on demand when an `OR`-dependent module is actively selected.

### 3. Progressive Disclosure UI Architecture
- To prevent cognitive overload from NUS's 1,000+ course catalog, NusTree uses a progressive disclosure interface:
  - Default view displays compulsory and planned degree modules.
  - Sidebar search provides fuzzy filtering with click-to-center canvas navigation.
  - Focus Mode isolates immediate dependency neighborhoods with keyboard shortcuts (`Esc` to return).

---

## 5. Key Engineering Tradeoffs

| Decision | Alternative Considered | Chosen Approach & Technical Tradeoff |
|---|---|---|
| **Client Layout vs. Server-Side Graphing** | Compute Graphviz / Dagre coordinates in Next.js Server Components | **Client-Side Layout**: Incurs initial JS computation overhead on page mount, but enables 60 FPS instantaneous recalculations when panning, zooming, filtering terms, and dragging nodes without network latency. |
| **Deterministic vs. NLP-Based Curriculum Scraping** | LLM / NLP extraction of degree requirements from raw text | **Deterministic AST Regex Filter**: Sacrifices automatic parsing of complex choice electives (e.g., "Choose 2 of 4 from List A"), but guarantees 100% precision and zero hallucinations on compulsory graduation requirements. |
| **Serializable Database Isolation for Degree Presets** | Default Read-Committed isolation level | **Serializable Transaction (`addUserDegreePreset`)**: Imposes a slight transaction lock cost, but completely prevents race conditions when verifying maximum allowable degree presets (`MAX_USER_DEGREE_PRESETS = 2`). |
| **Ghost Node Projection vs. Auto-Importing Prereqs** | Automatically insert missing prerequisites into user's semester plan | **Virtual Ghost Projection**: Keeps the user's database records pristine while visually exposing unfulfilled prerequisite paths as dashed warning nodes. |
| **Custom Sublayer Binning vs. Raw Dagre Layout** | Rely strictly on Dagre's native node separation | **Custom Sublayer Packing**: Adds layout grouping complexity, but prevents horizontal canvas stretching across 30+ unconnected intro courses. |

---

## 6. Key Learnings & Engineering Insights

### 1. Directed Acyclic Graphs in Academic Realities
Curriculum prerequisite structures are often assumed to be pure DAGs. In practice, academic handbooks contain circular preclusions, mutual exclusions (e.g., taking $A$ precludes $B$, and taking $B$ precludes $A$), and historical module code aliases (e.g., `CS1020` $\to$ `CS2040`). Sanitizing these relations into strict trees required handling reflexive preclusions and aliased prefixes before feeding them into Dagre.

### 2. Viewport Geometry & Virtual Canvas Synchronization
Synchronizing React Flow canvas zoom transforms with external HTML elements (e.g., floating sidebars, context menus, flash-highlight animations) requires listening to viewport transform matrices. Relying on standard DOM client coordinates without un-projecting via `flowInstance.screenToFlowPosition()` causes alignment drift when zooming.

### 3. Atomic Database Synchronization for Bulk Plan Imports
Bulk-importing NUSMods JSON files containing up to 40+ modules cannot be executed as sequential CRUD requests. Wrapping preview generation, validation, record deletion, and batch creation inside an atomic `prisma.$transaction` ensures that malformed import files leave existing student plans completely untouched.

---

## 7. Data Model & Database Schema

The database schema is defined in [`prisma/schema.prisma`](file:///home/raaghul/orbital/NusTree/prisma/schema.prisma):

- `Module`: Stores official module metadata, workload, department, and JSON-encoded prerequisite expression trees.
- `DegreePreset`: Stores faculty degree programs (e.g., Computer Science, Information Security).
- `DegreePresetModule`: Join table establishing fixed compulsory modules for each degree preset.
- `UserPlanModule`: Records user semester assignments with compound unique index on `(userId, moduleId)` and composite indices on `(userId, planYear, planSemester)`.
- `UserPreset`: Tracks degrees imported by users.
- `UserAddModule`: Ephemeral planner workspace state for drag-and-drop course staging.
- `User`, `Session`, `Account`, `Verification`: Multi-tenant authentication tables managed by Better Auth.

An Entity-Relationship (ER) diagram is available at [`docs/er-diagram.svg`](file:///home/raaghul/orbital/NusTree/docs/er-diagram.svg).

---

## 8. Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- PostgreSQL database instance
- npm or pnpm

### Environment Configuration

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/nustree?schema=public"
BETTER_AUTH_SECRET="your-generated-auth-secret"
BETTER_AUTH_URL="http://localhost:3000"
```

### Installation & Migration

```bash
# 1. Install dependencies
npm install

# 2. Apply database migrations
npx prisma migrate dev

# 3. Seed module catalog and degree presets
npm run seed

# 4. Start local development server
npm run dev
```

The application will be accessible at `http://localhost:3000`.

---

## 9. Testing Strategy

NusTree employs Vitest with a split-project configuration across three isolated test environments:

```bash
# Run default fast test suites (unit + ui)
npm run test

# Run logic & algorithmic unit tests (Node environment)
npm run test:unit

# Run React component & DOM interaction tests (JSDOM environment)
npm run test:ui

# Run database & authentication integration tests (Real PostgreSQL test database)
npm run test:auth

# Run complete test matrix
npm run test:all

# Run degree curriculum scraper pipeline
npm run scrape:degree
```

### Test Suite Breakdown

- **Unit Suite** (`src/graph/*.test.js`, `src/server/*.test.js`): Verifies Boolean expression evaluation, cycle prevention, sublayer layout calculations, and term progression logic.
- **UI Suite** (`src/components/*.test.jsx`): Tests sidebar filtering, degree preset picker modals, context menus, and timeline dragging in JSDOM.
- **Auth Suite** (`src/lib/*.auth.test.ts`): Runs against an isolated test database (`nustree_test`), automatically truncating tables between test cases to ensure zero state pollution.
