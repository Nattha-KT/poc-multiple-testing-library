// src/utils/validation/loginSchema.test.ts
import { describe, expect, it } from "vitest";
import { loginSchema } from "../login.schema";

describe("loginSchema", () => {
  it("passes with valid data", async () => {
    const data = {
      email: "user@example.com",
      password: "secret123",
    };
    await expect(loginSchema.validate(data)).resolves.toEqual(data);
  });

  it("fails if email is invalid", async () => {
    const data = {
      email: "invalid-email",
      password: "secret123",
    };
    await expect(loginSchema.validate(data)).rejects.toThrow("email must be a valid email");
  });

  it("fails if password is too short", async () => {
    const data = {
      email: "user@example.com",
      password: "123",
    };
    await expect(loginSchema.validate(data)).rejects.toThrow("Password too short");
  });

  it("fails if required fields are missing", async () => {
    const data = {};
    await expect(loginSchema.validate(data)).rejects.toThrow();
  });
});
