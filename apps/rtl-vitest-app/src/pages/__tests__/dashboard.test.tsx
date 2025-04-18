// src/pages/__tests__/Dashboard.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Provider } from "react-redux"

import Dashboard from "../dashboard"
import { store } from "../../libs/stores"


describe("Dashboard Page", () => {
  it("renders user info and logs out", async () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )

    expect(screen.getByText(/Welcome, John Doe/i)).toBeInTheDocument()
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument()
    expect(screen.getByText(/Active/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText("Logout"))

    await waitFor(() => {
      expect(screen.queryByText(/Welcome, John Doe/i)).not.toBeInTheDocument()
    })
  })
})
