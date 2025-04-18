// src/store/counterSlice.test.ts
import counterReducer, {
  increment,
  decrement,
  addByAmount,
} from "../counterSlice";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, { type: 'unknown_action' })).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  it("should handle decrement", () => {
    expect(counterReducer({ value: 1 }, decrement())).toEqual({ value: 0 });
  });

  it("should handle addByAmount", () => {
    expect(counterReducer({ value: 5 }, addByAmount(3))).toEqual({ value: 8 });
  });
});
