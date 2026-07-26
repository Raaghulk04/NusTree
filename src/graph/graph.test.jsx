// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
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

// Import the components under test
import Graph from "./graph";
import Simple from "./simple";
import NodeContextMenu from "@/components/NodeContextMenu";

// Mock user session
vi.mock("@/lib/auth-client", () => ({
  authClient: {
    useSession: vi.fn(() => ({
      data: { user: { id: "user-1", name: "Test User" } },
      isPending: false,
    })),
  },
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, priority, ...props }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

// Mock @xyflow/react (React Flow) which relies on browser API capabilities not present in JSDOM
vi.mock("@xyflow/react", () => {
  return {
    ReactFlow: ({ children, nodes, edges, onNodeClick }) => (
      <div data-testid="react-flow-stub">
        {/*render node elements as interactive buttons*/}
        <div data-testid="rf-nodes">
          {nodes?.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={(e) => onNodeClick(e, node)}
            >
              {node.id}
            </button>
          ))}
        </div>

        {/*render edges as readable text blocks (e.g source -> targert) */}
        <div data-testid="rf-edges">
          {edges?.map((edge) => (
            <span key={edge.id} data-testid={`edge-${edge.id}`}>
              {edge.source} {"->"} {edge.target}
            </span>
          ))}
        </div>
        {children}
      </div>
    ),
    Background: () => <div data-testid="rf-background-stub" />,
    Controls: () => <div data-testid="rf-controls-stub" />,
    useReactFlow: () => ({
      fitView: vi.fn(),
      zoomTo: vi.fn(),
      getNodes: vi.fn(() => []),
      getEdges: vi.fn(() => []),
    }),
    Handle: () => null,
    Position: {
      Left: "left",
      Right: "right",
      Top: "top",
      Bottom: "bottom",
    },
  };
});

describe("Basic Graph Integration Tests", () => {
  let container;
  let root;

  const mockData = {
    label: "CS2040S",
    title: "Data Structures and Algorithms",
  };
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

  function renderContextMenu(stateVal) {
    act(() => {
      root.render(
        <NodeContextMenu
          x={100}
          y={100}
          data={mockData}
          onClose={vi.fn()}
          state={stateVal}
          term={{ planYear: 1, planSemester: 1 }}
        />,
      );
    });
  }

  it("renders 'Mark as completed' button when the module is eligible", async () => {
    renderContextMenu(1); // contenxt menu wehen state === 1 (eligible)
    expect(getByText(document.body, "CS2040S")).toBeInTheDocument();
    expect(getByText(document.body, "Mark as completed")).toBeInTheDocument();
    expect(
      queryByText(document.body, "Prerequisites Not Met"),
    ).not.toBeInTheDocument();
  });

  it("renders 'completed' when the module is already completed", async () => {
    renderContextMenu(2);
    expect(getByText(document.body, "CS2040S")).toBeInTheDocument();
    expect(getByText(document.body, "Completed")).toBeInTheDocument();
  });

  it("renders 'Invalid' when the module is invalid", async () => {
    renderContextMenu(0);
    expect(getByText(document.body, "CS2040S")).toBeInTheDocument();
    expect(
      getByText(document.body, "Prerequisites Not Met"),
    ).toBeInTheDocument();
  });

  it("displays prerequisite edges when a node is clicked", async () => {
    const allMods = [
      {
        id: "CS1010",
        title: "Programming Methodology",
      },
      {
        id: "CS2040S",
        title: "Data Structures and Algorithms",
        prereqTree: { and: ["CS1010"] }, // CS1010 is a prerequisite
      },
    ];

    // render graph in "ALL" mode so ReactFlow mounts
    act(() => {
      root.render(
        <Graph
          mods={[]}
          allMods={allMods}
          takenMods={[]}
          completedMods={[]}
          compulsoryMods={[]}
          initialMode="All"
        />,
      );
    });

    // Verify that both modules are displayed in the DOM
    expect(getByText(container, "CS1010")).toBeInTheDocument();
    expect(getByText(container, "CS2040S")).toBeInTheDocument();
    // verify that there are no edges drawn on mount
    const edgesContainer = container.querySelector('[data-testid="rf-edges"]');
    expect(edgesContainer.children.length).toBe(0);

    // simulate a click event on CS2040s module node
    act(() => {
      fireEvent.click(getByText(container, "CS2040S"));
    });

    // assert that the correct prerequisite edge (CS1010 -> CS2040S) renders
    expect(queryByText(container, "CS1010 -> CS2040S")).toBeInTheDocument();
  });
});
