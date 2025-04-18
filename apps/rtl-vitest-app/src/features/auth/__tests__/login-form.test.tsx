// src/features/auth/__tests__/login-form.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import LoginForm from "../login-form";

const setup = () => {
  const handleSubmit = vi.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  return { handleSubmit };
};

describe("LoginForm", () => {
  it("shows validation errors when fields are empty", async () => {
    const { handleSubmit } = setup();
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password too short/i)).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("calls onSubmit with valid input", async () => {
    const { handleSubmit } = setup();

    await userEvent.type(screen.getByPlaceholderText("Email"), "user@example.com");
    await userEvent.type(screen.getByPlaceholderText("Password"), "secret123");

    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          email: "user@example.com",
          password: "secret123",
        })
      )
    );
  });
});
