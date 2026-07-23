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
    ReactFlow: ({ children, nodes, edges }) => (
      <div data-testid="react-flow-stub">
        <div data-testid="rf-nodes-count">{nodes?.length || 0}</div>
        <div data-testid="rf-edges-count">{edges?.length || 0}</div>
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

describe("Graph Integration Tests", () => {
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
});
