import { act } from "react";
import { createRoot } from "react-dom/client";
import {
  fireEvent,
  getByLabelText,
  getByRole,
  findByText,
  waitFor,
} from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LoginForm } from "./login-form";
import { authClient } from "@/lib/auth-client";

const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    signIn: {
      email: vi.fn(),
    },
  },
}));

describe("LoginForm Component", () => {
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
  });

  function renderLoginForm() {
    act(() => {
      root.render(<LoginForm />);
    });
  }

  it("renders the email and password inputs and login button", () => {
    renderLoginForm();

    expect(getByLabelText(container, /email/i)).toBeInTheDocument();
    expect(getByLabelText(container, /password/i)).toBeInTheDocument();
    expect(getByRole(container, "button", { name: /login/i })).toBeInTheDocument();
  });

  it("successfully redirects to /planner on correct credentials", async () => {
    authClient.signIn.email.mockResolvedValue({
      data: { success: true },
      error: null,
    });

    renderLoginForm();

    fireEvent.change(getByLabelText(container, /email/i), {
      target: { value: "raaghul@u.nus.edu" },
    });
    fireEvent.change(getByLabelText(container, /password/i), {
      target: { value: "orbitalPassword" },
    });

    fireEvent.click(getByRole(container, "button", { name: /login/i }));

    expect(authClient.signIn.email).toHaveBeenCalledWith({
      email: "raaghul@u.nus.edu",
      password: "orbitalPassword",
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/planner");
    });
  });

  it("displays an error alert message when authentication fails", async () => {
    authClient.signIn.email.mockResolvedValue({
      data: null,
      error: { message: "Invalid email or password" },
    });

    renderLoginForm();

    fireEvent.change(getByLabelText(container, /email/i), {
      target: { value: "wrong@u.nus.edu" },
    });
    fireEvent.change(getByLabelText(container, /password/i), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(getByRole(container, "button", { name: /login/i }));

    const errorAlert = await findByText(
      container,
      "Invalid email or password",
    );
    expect(errorAlert).toBeInTheDocument();

    expect(mockPush).not.toHaveBeenCalled();
  });
});
