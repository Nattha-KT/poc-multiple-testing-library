import '@testing-library/jest-dom'
import { server } from './libs/mocks';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());