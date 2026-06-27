import { act } from "react";
import { createRoot } from "react-dom/client";
import {
  fireEvent,
  findByText,
  getByLabelText,
  queryByText,
  waitFor,
} from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ModuleTracker from "./module-tracker";

vi.mock("next/link", () => ({
  default: ({ children, href }) => <a href={href.pathname}>{children}</a>,
}));

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    useSession: vi.fn(() => ({
      data: {
        user: {
          id: "user-1",
          name: "Test User",
        },
      },
      isPending: false,
    })),
  },
}));

vi.mock("./remove-planned-module", () => ({
  default: vi.fn(),
}));

vi.mock("@/components/module-search-dropdown", () => ({
  ModuleSearchDropdown: ({ year, sem }) => (
    <div data-testid="module-search">{`Y${year}S${sem}`}</div>
  ),
}));

vi.mock("./planned-modules-list", () => ({
  default: ({ plannedModules }) => (
    <div>
      <h2>Filtered Planned Modules</h2>
      {plannedModules.map((mod) => (
        <div key={mod.id}>{`list-${mod.moduleId}`}</div>
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
    vi.stubGlobal(
      "fetch",
      vi.fn((url) => {
        if (url === "/api/planner-modules") {
          return Promise.resolve({
            json: () => Promise.resolve(plannedModules),
          });
        }

        return Promise.reject(new Error(`Unexpected fetch URL: ${url}`));
      }),
    );
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
      root.render(<ModuleTracker mods={[]} />);
    });
  }

  it("filters the planned module list by selected year and semester without filtering the timeline", async () => {
    renderModuleTracker();

    expect(await findByText(container, "list-CS1101S")).toBeInTheDocument();
    expect(queryByText(container, "list-CS2030S")).not.toBeInTheDocument();
    expect(queryByText(container, "list-CS2040S")).not.toBeInTheDocument();
    expect(await findByText(container, "timeline-CS1101S")).toBeInTheDocument();
    expect(await findByText(container, "timeline-CS2030S")).toBeInTheDocument();
    expect(await findByText(container, "timeline-CS2040S")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getByLabelText(container, /semester/i), {
        target: { value: "2" },
      });
    });

    await waitFor(() => {
      expect(queryByText(container, "list-CS1101S")).not.toBeInTheDocument();
      expect(queryByText(container, "list-CS2030S")).toBeInTheDocument();
      expect(queryByText(container, "list-CS2040S")).not.toBeInTheDocument();
      expect(queryByText(container, "timeline-CS1101S")).toBeInTheDocument();
      expect(queryByText(container, "timeline-CS2030S")).toBeInTheDocument();
      expect(queryByText(container, "timeline-CS2040S")).toBeInTheDocument();
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
      expect(queryByText(container, "timeline-CS1101S")).toBeInTheDocument();
      expect(queryByText(container, "timeline-CS2030S")).toBeInTheDocument();
      expect(queryByText(container, "timeline-CS2040S")).toBeInTheDocument();
    });
  });
});
