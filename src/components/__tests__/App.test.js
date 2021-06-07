import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import App from '../../App';
import NoteList from '../NoteList';

afterEach(cleanup);

describe("Das Application", () => {
    
  it ("Loads without Crashing", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    expect(getByText("A React App")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toBeInTheDocument;
  });

  it("loads the editor and notelist components", () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);
    expect(getByTestId("header")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toHaveValue("");
    expect(getby)
  });

});