import React from 'react';
import { getByTestId, getByText, render, screen, getByPlaceholderText } from '@testing-library/react';
import MyEditor from '../Editor';

describe("MyEditor", () => {
  it("Renders without Crashing", () => {
   const { getByPlaceholderText } = render(<MyEditor />);
   expect(getByPlaceholderText('note title')).toHaveValue("");
  });
});