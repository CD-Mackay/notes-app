import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MyEditor from '../Editor';

describe("MyEditor", () => {
  const selectedNote = {
    id: 6,
    title: "Writing notes is fun",
    category: null,
    note: {
    blocks: [
    {
    key: "54ig0",
    data: { },
    text: "I made a note!",
    type: "unstyled",
    depth: 0,
    entityRanges: [ ],
    inlineStyleRanges: [ ]
    },
    {
    key: "fu1i",
    data: { },
    text: "editing is fun too!",
    type: "unstyled",
    depth: 0,
    entityRanges: [ ],
    inlineStyleRanges: [ ]
    }
    ],
    entityMap: { }
    },
    date_created: "1621275865939",
    last_modified: "1621276198079"
    };

  it("Renders without Crashing", () => {
   const { getByPlaceholderText } = render(<MyEditor />);
   expect(getByPlaceholderText('note title')).toHaveValue("");
  });

  it("Renders with saved Notes", () => {
      const { getByPlaceholderText } = render(<MyEditor selectedNote={selectedNote} />);
      expect(getByPlaceholderText('note title')).toHaveValue('Writing notes is fun');
  });

  it("Calls the save function when the save button is clicked", () => {
    const onSave = jest.fn();
    const { getByText } = render(<MyEditor onSave={onSave} />);
    fireEvent.click(getByText('Save'));
    expect(onSave).toHaveBeenCalled;
  });

  it("it clears the editor when the newNote button is clicked", () => {
    const { getByPlaceholderText, getByText } = render(<MyEditor selectedNote={selectedNote} />);
    fireEvent.click(getByText('New'));
    expect(getByPlaceholderText('note title')).toBeInTheDocument;
  });

});