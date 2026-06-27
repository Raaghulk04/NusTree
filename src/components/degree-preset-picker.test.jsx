import { act } from "react";
import { createRoot } from "react-dom/client";
import {
  fireEvent,
  findAllByText,
  findByText,
  getAllByText,
  queryByTestId,
  queryByText,
  waitFor,
} from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DegreePresetPicker } from "./degree-preset-picker";

const { removePlannedDegreePresetMock } = vi.hoisted(() => ({
  removePlannedDegreePresetMock: vi.fn(),
}));

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
  DegreePresetSearchDropdown: ({ degreePresets, disabled }) =>
    disabled ? null : (
      <div data-testid="degree-preset-search">
        {degreePresets.map((degreePreset) => (
          <span key={degreePreset.degreeCode}>{degreePreset.degreeName}</span>
        ))}
      </div>
    ),
}));

vi.mock("@/components/remove-planned-degree-preset", () => ({
  default: removePlannedDegreePresetMock,
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
                  degreeCode: "computer-science",
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
    expect(queryByTestId(container, "degree-preset-search")).toBeInTheDocument();

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith("/api/degree-presets");
      expect(fetchMock).toHaveBeenCalledWith("/api/user-degree-presets");
    });
  });

  it("hides the degree preset search when two degree presets are already selected", async () => {
    const fetchMock = vi.fn((url) => {
      if (url === "/api/degree-presets") {
        return Promise.resolve({
          json: () =>
            Promise.resolve([
              {
                degreeCode: "computer-science",
                degreeName: "Computer Science",
              },
              {
                degreeCode: "information-security",
                degreeName: "Information Security",
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
                  degreeCode: "computer-science",
                  degreeName: "Computer Science",
                },
              },
              {
                degreePreset: {
                  degreeCode: "information-security",
                  degreeName: "Information Security",
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
      await findByText(
        container,
        "You have selected the maximum of two degree presets.",
      ),
    ).toBeInTheDocument();
    expect(
      queryByTestId(container, "degree-preset-search"),
    ).not.toBeInTheDocument();
  });

  it("removes a selected degree preset and refreshes the selected degree list", async () => {
    removePlannedDegreePresetMock.mockResolvedValue();
    let selectedFetchCount = 0;

    const fetchMock = vi.fn((url) => {
      if (url === "/api/degree-presets") {
        return Promise.resolve({
          json: () =>
            Promise.resolve([
              {
                degreeCode: "computer-science",
                degreeName: "Computer Science",
              },
              {
                degreeCode: "information-security",
                degreeName: "Information Security",
              },
            ]),
        });
      }

      if (url === "/api/user-degree-presets") {
        selectedFetchCount += 1;
        const selectedPresets =
          selectedFetchCount === 1
            ? [
                {
                  degreePreset: {
                    degreeCode: "computer-science",
                    degreeName: "Computer Science",
                  },
                },
                {
                  degreePreset: {
                    degreeCode: "information-security",
                    degreeName: "Information Security",
                  },
                },
              ]
            : [
                {
                  degreePreset: {
                    degreeCode: "computer-science",
                    degreeName: "Computer Science",
                  },
                },
              ];

        return Promise.resolve({
          json: () => Promise.resolve(selectedPresets),
        });
      }

      return Promise.reject(new Error(`Unexpected fetch URL: ${url}`));
    });
    vi.stubGlobal("fetch", fetchMock);

    renderDegreePresetPicker();

    expect(await findByText(container, "Information Security")).toBeInTheDocument();
    expect(
      queryByTestId(container, "degree-preset-search"),
    ).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.click(getAllByText(container, "Remove")[1]);
    });

    expect(removePlannedDegreePresetMock).toHaveBeenCalledWith(
      "information-security",
    );

    await waitFor(() => {
      expect(
        queryByText(
          container,
          "You have selected the maximum of two degree presets.",
        ),
      ).not.toBeInTheDocument();
      expect(queryByTestId(container, "degree-preset-search")).toBeInTheDocument();
    });
  });
});
