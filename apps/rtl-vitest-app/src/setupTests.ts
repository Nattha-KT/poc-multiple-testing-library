import "@testing-library/jest-dom";

if (typeof window === "undefined") {
  const { server } = await import("@/__mocks__");

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
