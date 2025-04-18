// src/components/__tests__/Button.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders with provided label", () => {
    render(<Button label="Submit" />);
    expect(screen.getByTestId("custom-button")).toHaveTextContent("Submit");
  });

  it("is disabled when `disabled` prop is true", () => {
    render(<Button label="Submit" disabled />);
    expect(screen.getByTestId("custom-button")).toBeDisabled();
  });

  it("calls `onClick` when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByTestId("custom-button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
