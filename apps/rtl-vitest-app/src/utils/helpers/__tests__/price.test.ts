import { describe, expect, it } from "vitest";
import { calculatePriceWithDiscount } from "../price";

describe("calculatePriceWithDiscount", () => {
  it("calculates correct price with 20% discount", () => {
    expect(calculatePriceWithDiscount(100, 20)).toBe(80);
  });

  it("returns original price when discount is 0", () => {
    expect(calculatePriceWithDiscount(200, 0)).toBe(200);
  });

  it("throws error when discount is negative", () => {
    expect(() => calculatePriceWithDiscount(100, -10)).toThrow("Invalid discount");
  });

  it("throws error when discount exceeds 100", () => {
    expect(() => calculatePriceWithDiscount(100, 150)).toThrow("Invalid discount");
  });
});
