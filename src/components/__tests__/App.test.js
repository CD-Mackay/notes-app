import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import App from '../../App';

afterEach(cleanup);

describe("Das Application", () => {

  it ("Loads without Crashing", async () => {
    const { getByText, getByPlaceholderText, debug } = render(<App />);
    debug();
    expect(getByText("A React App")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toBeInTheDocument;
  });

  it("loads the editor and notelist components", async () => {
    const { getByTestId, getByPlaceholderText } = render(<App />);
    expect(getByTestId("header")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toHaveValue("");
  });

  it("updates the contents of the editor according to user input", () => {
    const { getByPlaceholderText } = render(<App />);
    fireEvent.change(getByPlaceholderText('note title'), {
      target: {value: "updated title"}
    });
    expect(getByPlaceholderText('note title')).toHaveValue("updated title");
  });
  it("clears the editor when the new note button is clicked", () => {
    const { getByText, getByPlaceholderText } = render(<App/>);
    fireEvent.change(getByPlaceholderText('note title'), {
      target: {value: "updated title"}
    });
    expect(getByPlaceholderText('note title')).toHaveValue("updated title");
    fireEvent.click(getByText('New'));
    expect(getByPlaceholderText('note title')).toHaveValue("");
  });
});