import React from 'react';
import { getByTestId, getByText, render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('displays text about the apps creator', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toContainHTML(`<div class="header" data-testid="header"><h1>&lt;Notes /&gt;  By Connor Mackay Development</h1><h3>A React App</h3></div>`);
  })
});

