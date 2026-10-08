import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio owner name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /danah alsubaie/i })).toBeInTheDocument();
});
