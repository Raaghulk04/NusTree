import { act } from "react";
import { createRoot } from "react-dom/client";
import { findAllByText, findByText, waitFor } from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DegreePresetPicker } from "./degree-preset-picker";

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    useSession: vi.fn(() => ({
      data: {
        user: {
          id: "user-1",
        },
      },
      isPending: false,
    })),
  },
}));

vi.mock("@/components/degree-preset-search-dropdown", () => ({
  DegreePresetSearchDropdown: ({ degreePresets }) => (
    <div data-testid="degree-preset-search">
      {degreePresets.map((degreePreset) => (
        <span key={degreePreset.degreeCode}>{degreePreset.degreeName}</span>
      ))}
    </div>
  ),
}));

describe("DegreePresetPicker", () => {
  let container;
  let root;

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

  function renderDegreePresetPicker() {
    act(() => {
      root.render(<DegreePresetPicker />);
    });
  }

  it("loads available and selected degree presets from degree-named API routes", async () => {
    const fetchMock = vi.fn((url) => {
      if (url === "/api/degree-presets") {
        return Promise.resolve({
          json: () =>
            Promise.resolve([
              {
                degreeCode: "computer-science",
                degreeName: "Computer Science",
              },
            ]),
        });
      }

      if (url === "/api/user-degree-presets") {
        return Promise.resolve({
          json: () =>
            Promise.resolve([
              {
                degreePreset: {
                  degreeName: "Computer Science",
                },
              },
            ]),
        });
      }

      return Promise.reject(new Error(`Unexpected fetch URL: ${url}`));
    });
    vi.stubGlobal("fetch", fetchMock);

    renderDegreePresetPicker();

    expect(
      await findByText(container, "Selected Degree Presets"),
    ).toBeInTheDocument();
    expect(await findAllByText(container, "Computer Science")).toHaveLength(2);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith("/api/degree-presets");
      expect(fetchMock).toHaveBeenCalledWith("/api/user-degree-presets");
    });
  });
});
