import "@testing-library/jest-dom";

import { server } from "@/__mocks__/node";  // ใช้ node worker
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());