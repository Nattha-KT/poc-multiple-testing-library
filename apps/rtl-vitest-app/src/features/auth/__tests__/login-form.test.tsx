import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoginForm from "../login-form";

describe("LoginForm", () => {
  it("shows validation errors when fields are empty", async () => {
    const handleSubmit = vi.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    fireEvent.click(screen.getByText("Login"));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password must be at least/i)).toBeInTheDocument();
    // expect(handleSubmit).not.toHaveBeenCalled();
  });

//   it("calls onSubmit with valid input", async () => {
//     const handleSubmit = vi.fn();
//     render(<LoginForm onSubmit={handleSubmit} />);

//     fireEvent.change(screen.getByPlaceholderText("Email"), {
//       target: { value: "user@example.com" },
//     });

//     fireEvent.change(screen.getByPlaceholderText("Password"), {
//       target: { value: "secret123" },
//     });

//     fireEvent.click(screen.getByText("Login"));

//     await screen.findByText("Login"); // wait for validation
//     expect(handleSubmit).toHaveBeenCalledWith({
//       email: "user@example.com",
//       password: "secret123",
//     });
//   });
});
