// src/utils/__tests__/helpers.test.ts
import { describe, it, expect } from "vitest";
import { formatDate, validateEmail } from "../helpers";

describe("formatDate", () => {
  it("formats valid ISO date string correctly", () => {
    expect(formatDate("2025-04-17")).toBe("17/04/2025");
  });

  it("returns 'Invalid date' for invalid date", () => {
    expect(formatDate("not-a-date")).toBe("Invalid date");
  });

  it("handles empty string", () => {
    expect(formatDate("")).toBe("Invalid date");
  });
});

describe("validateEmail", () => {
  it("returns true for valid email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  it("returns false for invalid email", () => {
    expect(validateEmail("invalid-email")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(validateEmail("")).toBe(false);
  });

  it("returns false for missing domain", () => {
    expect(validateEmail("user@")).toBe(false);
  });

  it("returns false for null or undefined (edge case)", () => {
    // @ts-expect-error use only unit test case
    expect(validateEmail(undefined)).toBe(false);
    // @ts-expect-error use only unit test case
    expect(validateEmail(null)).toBe(false);
  });
});
