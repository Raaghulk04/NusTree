import { act } from "react";
import { createRoot } from "react-dom/client";
import {
  fireEvent,
  getByText,
  queryByText,
  waitFor,
} from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { authClient } from "@/lib/auth-client";
import PlannerWorkspace from "./planner-workspace";
import removePlannedModule from "./remove-planned-module";
import { DegreePresetPicker } from "./degree-preset-picker";

// Hoist mock references for server actions
const { addPlannedDegreePresetMock, removePlannedDegreePresetMock } =
  vi.hoisted(() => ({
    addPlannedDegreePresetMock: vi.fn(),
    removePlannedDegreePresetMock: vi.fn(),
  }));

// Mock user session

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    useSession: vi.fn(() => ({
      data: { user: { id: "user-1", name: "Test User" } },
      isPending: false,
    })),
  },
}));

// Mock deletion actions
vi.mock("./remove-planned-module", () => ({
  default: vi.fn(),
}));

// Mock server actions with hosted mock functions to avoid parsing server-side dependencies in JSDOM
vi.mock("@/components/add-planned-degree-preset", () => ({
  default: addPlannedDegreePresetMock,
}));

vi.mock("@/components/remove-planned-degree-preset", () => ({
  default: removePlannedDegreePresetMock,
}));

// Mock module search dropdown to simplify UI interaction
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

// Mock planned modules list component
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

// Mock timeline component
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

// Mock degree preset search dropdown component
vi.mock("@/components/degree-preset-search-dropdown", () => ({
  DegreePresetSearchDropdown: ({ degreePresets, onAdd, disabled }) =>
    disabled ? null : (
      <div data-testid="degree-preset-search">
        <button
          type="button"
          onClick={async () => {
            await addPlannedDegreePresetMock("computer-science");
            onAdd();
          }}
        >
          Add mocked preset
        </button>
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
    vi.stubGlobal(
      "fetch",
      vi.fn(() => {
        const response = responses.shift() || responses.at(-1) || [];
        return Promise.resolve({
          json: () => Promise.resolve(response),
        });
      }),
    );
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

  it("removes an already planned module", async () => {
    const initialModules = [
      { id: "p1", moduleId: "CS1101S", planYear: 1, planSemester: 1 },
      { id: "p2", moduleId: "CS2030S", planYear: 1, planSemester: 1 },
    ];

    const refreshedModules = [
      { id: "p2", moduleId: "CS2030S", planYear: 1, planSemester: 1 },
    ];

    stubPlannerModuleFetch(initialModules, refreshedModules);
    renderPlannerWorkspace();

    await waitFor(() => {
      expect(queryByText(container, "CS1101S")).toBeInTheDocument();
      expect(queryByText(container, "CS2030S")).toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.click(getByText(container, "remove-CS1101S"));
    });

    await waitFor(() => {
      expect(removePlannedModule).toHaveBeenCalledWith("CS1101S");
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(queryByText(container, "CS1101S")).not.toBeInTheDocument();
      expect(queryByText(container, "CS2030S")).toBeInTheDocument();
    });
  });
});

describe("DegreePresetPicker Integration Tests", () => {
  let container;
  let root;

  beforeEach(() => {
    vi.clearAllMocks();
    addPlannedDegreePresetMock.mockResolvedValue(undefined);
    removePlannedDegreePresetMock.mockResolvedValue(undefined);
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

  function stubDegreePresetFetch(available, selectedResponses) {
    let selectedCallCount = 0;
    vi.stubGlobal(
      "fetch",
      vi.fn((url) => {
        if (url === "/api/degree-presets") {
          return Promise.resolve({
            json: () => Promise.resolve(available),
          });
        }
        if (url === "/api/user-degree-presets") {
          const response =
            selectedResponses[selectedCallCount] ||
            selectedResponses.at(-1) ||
            [];
          selectedCallCount += 1;
          return Promise.resolve({
            json: () => Promise.resolve(response),
          });
        }
        return Promise.reject(new Error(`Unexpected fetch URL: ${url}`));
      }),
    );
  }

  function renderDegreePresetPicker() {
    act(() => {
      root.render(<DegreePresetPicker />);
    });
  }

  it("creates a planned degree preset by calling add utility and refreshing list", async () => {
    const available = [
      { degreeCode: "computer-science", degreeName: "Computer Science" },
    ];
    const initialSelected = [];
    const updatedSelected = [
      {
        degreePreset: {
          degreeCode: "computer-science",
          degreeName: "Computer Science",
        },
      },
    ];

    stubDegreePresetFetch(available, [initialSelected, updatedSelected]);

    renderDegreePresetPicker();

    await waitFor(() => {
      expect(
        getByText(container, "Selected Degree Presets"),
      ).toBeInTheDocument();
    });
    expect(queryByText(container, "Computer Science")).not.toBeInTheDocument();

    // Trigger add action
    await act(async () => {
      fireEvent.click(getByText(container, "Add mocked preset"));
    });

    // Assert add utility was called and list updated
    await waitFor(() => {
      expect(addPlannedDegreePresetMock).toHaveBeenCalledWith(
        "computer-science",
      );
      expect(getByText(container, "Computer Science")).toBeInTheDocument();
    });
  });

  it("deletes a planned degree preset by calling remove utility and refreshing list", async () => {
    const available = [
      { degreeCode: "computer-science", degreeName: "Computer Science" },
    ];
    const initialSelected = [
      {
        degreePreset: {
          degreeCode: "computer-science",
          degreeName: "Computer Science",
        },
      },
    ];
    const updatedSelected = [];

    stubDegreePresetFetch(available, [initialSelected, updatedSelected]);

    renderDegreePresetPicker();

    // Wait for preset to render
    await waitFor(() => {
      expect(getByText(container, "Computer Science")).toBeInTheDocument();
    });

    // Click remove button
    await act(async () => {
      fireEvent.click(getByText(container, "Remove"));
    });

    // Assert remove utility was called and list updated
    await waitFor(() => {
      expect(removePlannedDegreePresetMock).toHaveBeenCalledWith(
        "computer-science",
      );
      expect(
        queryByText(container, "Computer Science"),
      ).not.toBeInTheDocument();
    });
  });
});
