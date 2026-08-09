import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act } from "react";
import { authClient } from "@/lib/auth-client";
import PlannerWorkspace from "@/components/planner-workspace";
import removePlannedModule from "@/components/remove-planned-module";
import {
  fireEvent,
  getByText,
  queryByText,
  waitFor,
} from "@testing-library/dom";
import { ModuleSearchDropdown } from "@/components/module-search-dropdown";
import { createTailwindMerge } from "tailwind-merge";
import { createRouteLoader } from "next/dist/client/route-loader";
import { createRoot } from "react-dom/client";
// mock user session
vi.mock("@/lib/auth-client", () => ({
  authClient: {
    useSession: vi.fn(() => ({
      data: { user: { id: "user-1", name: "Test User" } },
      isPending: false,
    })),
  },
}));

// mock deletion actions
vi.mock("@/components/remove-planned-module", () => ({
  defualt: vi.fn(),
}));

vi.mock("@/components/module-search-dropdown", () => ({
  ModuleSearchDropdown: ({ year, sem, onAdd }) => (
    <div>
      <div data-testid="module-search">{`Y${year}S${sem}`}</div>
      <button type="button" onClick={onAdd}>
        Add mocked module
      </button>
    </div>
  ),
}));

vi.mock("./planned-modules-list", () => ({
  default: ({ plannedModules, onRemove }) => (
    <div>
      <h2>Filtered Planned Modules</h2>
      {plannedModules.map((mod) => (
        <div key={mod.id}>
          <span>{mod.moduleId}</span>
          <button type="button" onClick={() => onRemove(mod.moduleId)}>
            {`remove-${mod.moduleId}`}
          </button>
        </div>
      ))}
    </div>
  ),
}));

vi.mock("@/components/semester-timeline", () => ({
  default: ({ plannedModules }) => (
    <div>
      <h2>Timeline Modules</h2>
      {plannedModules.map((mod) => (
        <div key={mod.id}>{`timeline-${mod.moduleId}`}</div>
      ))}
    </div>
  ),
}));

describe("PlannerWorkspace Integration Tests", () => {
  let container;
  let root;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(removePlannedModule).mockResolvedValue(undefined);
    container = document.createElement("div");
    document.body.innerHTML = "";
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
        root.unmount();
    });
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  function stubPlannerModuleFetch(...responses) {
    const queue = [...responses];
    vi.stubGlobal("fetch", vi.fn(() => {
      const resp = queue.shift() ?? queue.at(-1) ?? [];
      return Promise.resolve({ json: () => Promise.resolve(resp) });
    }));
  }

  function renderPlannerWorkspace() {
    act(() => {
      root.render(<PlannerWorkspace mods={[]} />);
    });
  }

  it("creates a planned module by refreshing shared planner data after add", async () => {
        stubPlannerModuleFetch(
          [],
          [{ id: "planned-1", moduleId: "CS1101S", planYear: 1, planSemester: 1 }],
        );

        renderPlannerWorkspace();

        // Verify initial load fetch is triggered
        await waitFor(() => {
          expect(fetch).toHaveBeenCalledWith("/api/planner-modules");
        });

        // Click mock add button
        await act(async () => {
          fireEvent.click(getByText(container, "Add mocked module"));
        });

        // Verify refetch occurred and new module renders
        await waitFor(() => {
          expect(fetch).toHaveBeenCalledTimes(2);
          expect(queryByText(container, "CS1101S")).toBeInTheDocument();
        });
      });
});