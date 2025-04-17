import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // <-- Add this import for jest-dom matchers
import App from './App';

describe('App', () => {
  it('renders button and handles click', () => {
    render(<App />);

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();  // Now this will work with jest-dom matchers

    fireEvent.click(button);
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
