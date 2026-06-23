import { act } from "react";
import { createRoot } from "react-dom/client";
import { fireEvent, getByRole, getByText, waitFor } from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Navbar } from "./navbar";
import { authClient } from "@/lib/auth-client";

const mockPush = vi.fn();
const mockConsoleLog = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }) => <img alt={alt} {...props} />,
}));

vi.mock("lucide-react", () => ({
  LogOut: () => <svg aria-label="Log out icon" />,
}));

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    signOut: vi.fn(),
  },
}));

describe("Navbar", () => {
  let container;
  let root;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, "log").mockImplementation(mockConsoleLog);
    container = document.createElement("div");
    document.body.innerHTML = "";
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    vi.restoreAllMocks();
    document.body.innerHTML = "";
  });

  function renderNavbar() {
    act(() => {
      root.render(<Navbar />);
    });
  }

  it("renders the brand and navigation links", () => {
    renderNavbar();

    expect(getByText(container, "NusTree")).toBeInTheDocument();
    expect(getByRole(container, "link", { name: "Planner" })).toHaveAttribute(
      "href",
      "/planner",
    );
    expect(
      getByRole(container, "link", { name: "Eligible Mods" }),
    ).toHaveAttribute("href", "/eligibleMods");
    expect(getByRole(container, "link", { name: "Settings" })).toHaveAttribute(
      "href",
      "/settings",
    );
  });

  it("redirects to home after a successful logout", async () => {
    authClient.signOut.mockResolvedValue({
      error: null,
    });

    renderNavbar();

    fireEvent.click(getByRole(container, "button"));

    await waitFor(() => {
      expect(authClient.signOut).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("still redirects home when logout returns an error", async () => {
    authClient.signOut.mockResolvedValue({
      error: { message: "Logout failed" },
    });

    renderNavbar();

    fireEvent.click(getByRole(container, "button"));

    await waitFor(() => {
      expect(mockConsoleLog).toHaveBeenCalledWith({
        message: "Logout failed",
      });
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("shows a logout control", () => {
    renderNavbar();

    expect(getByRole(container, "button")).toBeInTheDocument();
    expect(
      getByRole(container, "img", { name: "NusTree logo" }),
    ).toBeInTheDocument();
  });
});
