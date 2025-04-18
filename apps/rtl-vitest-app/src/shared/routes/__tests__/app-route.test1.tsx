// src/__tests__/AppRouting.test.tsx
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import {router} from '@shared/routes';  // Use your actual router

describe('Routing Logic', () => {
  it('should render Login page when navigated to /login', async () => {
    // Use your existing router configuration
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/login'],  // Start with the '/login' URL
    });

    render(<RouterProvider router={testRouter} />);

    // Check if the Login page has loaded
    expect(await screen.findByText(/login/i)).toBeInTheDocument();
  });

  it('should render Dashboard page when navigated to /dashboard', async () => {
    // Use your existing router configuration
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/dashboard'],  // Start with the '/dashboard' URL
    });

    render(<RouterProvider router={testRouter} />);

    // Check if the Dashboard page has loaded
    expect(await screen.findByText(/dashboard/i)).toBeInTheDocument();
  });
});
