import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import App from './App';


test("renders heading and button", () => {
  render(<App />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test('clicking the button shows "Clicked!"', () => {
  render(<App />);
  fireEvent.click(screen.getByText("Click me"));
  expect(screen.getByText("Clicked!")).toBeInTheDocument();
});
