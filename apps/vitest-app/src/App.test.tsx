
import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders button and handles click', () => {
    render(<App />);
    const button = screen.getByTestId('shared-button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');

    fireEvent.click(button);
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
