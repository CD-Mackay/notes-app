import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText } from '@testing-library/react';
import App from '../../App';

describe("Das Application", () => {
  it ("Loads without Crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("A React App")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toBeInTheDocument;
  });
});