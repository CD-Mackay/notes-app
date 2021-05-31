import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import App from '../../App';
import NoteList from '../NoteList';

//afterEach(cleanup);

describe("Das Application", () => {

  const notes = [
    {
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
    }
    ];
    
  it ("Loads without Crashing", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    expect(getByText("A React App")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toBeInTheDocument;
  });
});