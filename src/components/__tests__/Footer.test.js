import React from 'react';
import { getByTestId, getByText, render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('should display the appropriate text', () => {
    render(<Footer />);
    expect(screen.getByTestId('name-text')).toHaveTextContent("Connor Mackay");
  })
});