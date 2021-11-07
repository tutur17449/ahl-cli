import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

test('renders welcome to next js', () => {
  render(<Home />);
  const element = screen.getByText('Welcome to Next.js!');
  expect(element).toBeInTheDocument();
});
