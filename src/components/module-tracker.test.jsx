import { act } from "react";
import { createRoot } from "react-dom/client";
import {
  fireEvent,
  findByText,
  getByLabelText,
  getByText,
  queryByText,
  waitFor,
} from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ModuleTracker from "./module-tracker";
import PlannerWorkspace from "./planner-workspace";
import removePlannedModule from "./remove-planned-module";

const authState = vi.hoisted(() => ({
  session: {
    data: {
      user: {
        id: "user-1",
        name: "Test User",
      },
    },
    isPending: false,
  },
}));

vi.mock("next/link", () => ({
  default: ({ children, href }) => <a href={href.pathname}>{children}</a>,
}));

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    useSession: vi.fn(() => authState.session),
  },
}));

vi.mock("./remove-planned-module", () => ({
  default: vi.fn(),
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
          <span>{`list-${mod.moduleId}`}</span>
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

describe("ModuleTracker", () => {
  let container;
  let root;

  const plannedModules = [
    {
      id: "planned-1",
      moduleId: "CS1101S",
      planYear: 1,
      planSemester: 1,
      isPresetModule: false,
    },
    {
      id: "planned-2",
      moduleId: "CS2030S",
      planYear: 1,
      planSemester: 2,
      isPresetModule: false,
    },
    {
      id: "planned-3",
      moduleId: "CS2040S",
      planYear: 2,
      planSemester: 1,
      isPresetModule: false,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
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

  function renderModuleTracker() {
    act(() => {
      root.render(
        <ModuleTracker
          mods={[]}
          plannedModules={plannedModules}
          onAddModule={vi.fn()}
          onRemoveModule={vi.fn()}
          removingModuleId={null}
        />,
      );
    });
  }

  it("filters the planned module list by selected year and semester", async () => {
    renderModuleTracker();

    expect(await findByText(container, "list-CS1101S")).toBeInTheDocument();
    expect(queryByText(container, "list-CS2030S")).not.toBeInTheDocument();
    expect(queryByText(container, "list-CS2040S")).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getByLabelText(container, /semester/i), {
        target: { value: "2" },
      });
    });

    await waitFor(() => {
      expect(queryByText(container, "list-CS1101S")).not.toBeInTheDocument();
      expect(queryByText(container, "list-CS2030S")).toBeInTheDocument();
      expect(queryByText(container, "list-CS2040S")).not.toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.change(getByLabelText(container, /year/i), {
        target: { value: "2" },
      });
      fireEvent.change(getByLabelText(container, /semester/i), {
        target: { value: "1" },
      });
    });

    await waitFor(() => {
      expect(queryByText(container, "list-CS1101S")).not.toBeInTheDocument();
      expect(queryByText(container, "list-CS2030S")).not.toBeInTheDocument();
      expect(queryByText(container, "list-CS2040S")).toBeInTheDocument();
    });
  });
});

describe("PlannerWorkspace", () => {
  let container;
  let root;

  const initialPlannedModules = [
    {
      id: "planned-1",
      moduleId: "CS1101S",
      planYear: 1,
      planSemester: 1,
      isPresetModule: false,
    },
    {
      id: "planned-2",
      moduleId: "CS2030S",
      planYear: 1,
      planSemester: 2,
      isPresetModule: false,
    },
  ];

  const createdPlannedModules = [
    {
      id: "planned-1",
      moduleId: "CS1101S",
      planYear: 1,
      planSemester: 1,
      isPresetModule: false,
    },
  ];

  const updatedPlannedModules = [
    {
      id: "planned-1",
      moduleId: "CS1101S",
      planYear: 1,
      planSemester: 2,
      isPresetModule: false,
    },
  ];

  const deleteRefreshedPlannedModules = [
    {
      id: "planned-2",
      moduleId: "CS2030S",
      planYear: 1,
      planSemester: 2,
      isPresetModule: false,
    },
    {
      id: "planned-3",
      moduleId: "CS2040S",
      planYear: 1,
      planSemester: 1,
      isPresetModule: false,
    },
  ];

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

  beforeEach(() => {
    vi.clearAllMocks();
    authState.session = {
      data: {
        user: {
          id: "user-1",
          name: "Test User",
        },
      },
      isPending: false,
    };
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

  function renderPlannerWorkspace() {
    act(() => {
      root.render(<PlannerWorkspace mods={[]} />);
    });
  }

  it("reads planned modules into the tracker card and the timeline card", async () => {
    stubPlannerModuleFetch(initialPlannedModules);

    renderPlannerWorkspace();

    expect(await findByText(container, "list-CS1101S")).toBeInTheDocument();
    expect(queryByText(container, "list-CS2030S")).not.toBeInTheDocument();
    expect(await findByText(container, "timeline-CS1101S")).toBeInTheDocument();
    expect(await findByText(container, "timeline-CS2030S")).toBeInTheDocument();
  });

  it("creates a planned module by refreshing shared planner data after add", async () => {
    stubPlannerModuleFetch([], createdPlannedModules);

    renderPlannerWorkspace();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/api/planner-modules");
    });
    expect(queryByText(container, "list-CS1101S")).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.click(getByText(container, "Add mocked module"));
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(queryByText(container, "list-CS1101S")).toBeInTheDocument();
      expect(queryByText(container, "timeline-CS1101S")).toBeInTheDocument();
    });
  });

  it("updates a planned module by refreshing shared planner data after add in a new term", async () => {
    stubPlannerModuleFetch(createdPlannedModules, updatedPlannedModules);

    renderPlannerWorkspace();

    expect(await findByText(container, "list-CS1101S")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getByLabelText(container, /semester/i), {
        target: { value: "2" },
      });
    });

    await waitFor(() => {
      expect(queryByText(container, "list-CS1101S")).not.toBeInTheDocument();
      expect(queryByText(container, "timeline-CS1101S")).toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.click(getByText(container, "Add mocked module"));
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(queryByText(container, "list-CS1101S")).toBeInTheDocument();
      expect(queryByText(container, "timeline-CS1101S")).toBeInTheDocument();
    });
  });

  it("deletes a planned module by refreshing shared planner data after remove", async () => {
    stubPlannerModuleFetch(initialPlannedModules, deleteRefreshedPlannedModules);

    renderPlannerWorkspace();

    expect(await findByText(container, "list-CS1101S")).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(getByText(container, "remove-CS1101S"));
    });

    await waitFor(() => {
      expect(removePlannedModule).toHaveBeenCalledWith("CS1101S");
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(queryByText(container, "list-CS1101S")).not.toBeInTheDocument();
      expect(queryByText(container, "timeline-CS1101S")).not.toBeInTheDocument();
      expect(queryByText(container, "list-CS2040S")).toBeInTheDocument();
      expect(queryByText(container, "timeline-CS2040S")).toBeInTheDocument();
    });
  });
});
