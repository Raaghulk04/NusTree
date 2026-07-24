// @vitest-environment jsdom

import FocusView from "@/graph/focusView";
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

// Mock @xyflow/react (React Flow)
vi.mock("@xyflow/react", () => {
  return {
    ReactFlow: ({ children, nodes, edges }) => (
      <div data-testid="react-flow-stub">
        <div data-testid="rf-nodes">
          {nodes?.map((node) => (
            <div key={node.id} data-testid={`node-${node.id}`}>
              {node.id}
            </div>
          ))}
        </div>
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
    applyNodeChanges: vi.fn((changes, nodes) => nodes),
    Handle: () => null,
    Position: {
      Left: "left",
      Right: "right",
      Top: "top",
      Bottom: "bottom",
    },
  };
});

describe("FocusView UI Integration Tests", () => {
  let container;
  let root;

  const mockMods = [
    {
      id: "CS2040S",
      title: "Data Structures",
      prereqTree: { and: ["CS2030S"] },
    },
    { id: "CS2030S", title: "OOP", prereqTree: { and: ["CS1010"] } },
    { id: "CS1010", title: "Intro to Prog" },
  ];

  // React Flow styled nodes representation of the modules
  const mockBaseNodes = [
    {
      id: "CS2040S",
      type: "moduleNodeType",
      position: { x: 0, y: 0 },
      data: { code: 1, label: "CS2040S" },
    },
    {
      id: "CS2030S",
      type: "moduleNodeType",
      position: { x: 0, y: 0 },
      data: { code: 1, label: "CS2030S" },
    },
    {
      id: "CS1010",
      type: "moduleNodeType",
      position: { x: 0, y: 0 },
      data: { code: 1, label: "CS1010" },
    },
  ];

  const prereqMap = new Map([
    ["CS2040S", { and: ["CS2030S"] }],
    ["CS2030S", { and: ["CS1010"] }],
    ["CS1010", null],
  ]);

  const modMap = new Map(mockMods.map((m) => [m.id, m]));

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

  it("filters visible ReactFlow nodes to only show deep prerequisites of the selected node", async () => {
    act(() => {
      root.render(
        <FocusView
          mods={mockMods}
          allMods={mockMods}
          prereqMap={prereqMap}
          modMap={modMap}
          completedIds={[]} // Nothing completed
          selectedNode="CS2040S"
          setSelectedNode={vi.fn()}
          selectedView="focus"
          baseNodes={mockBaseNodes}
          setBaseNodes={vi.fn()}
        />,
      );
    });

    // Wait for JSDOM render
    await waitFor(() => {
      // CS2040S and its deep prereqs (CS2030S, CS1010) should be rendered
      expect(getByText(container, "CS2040S")).toBeInTheDocument();
      expect(getByText(container, "CS2030S")).toBeInTheDocument();
      expect(getByText(container, "CS1010")).toBeInTheDocument();
    });
  });

  it("hides deep prerequisites if an intermediate prerequisite is completed", async () => {
    act(() => {
      root.render(
        <FocusView
          mods={mockMods}
          allMods={mockMods}
          prereqMap={prereqMap}
          modMap={modMap}
          completedIds={["CS2030S"]} // CS2030S completed
          selectedNode="CS2040S"
          setSelectedNode={vi.fn()}
          selectedView="focus"
          baseNodes={mockBaseNodes}
          setBaseNodes={vi.fn()}
        />,
      );
    });

    await waitFor(() => {
      expect(getByText(container, "CS2040S")).toBeInTheDocument();
      expect(getByText(container, "CS2030S")).toBeInTheDocument();

      // CS1010 should be hidden because CS2030S is already complete!
      expect(queryByText(container, "CS1010")).not.toBeInTheDocument();
    });
  });
});
