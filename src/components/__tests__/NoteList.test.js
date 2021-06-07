import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';

import NoteList from '../NoteList';

afterEach(cleanup);

describe("NoteList", () => {
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
    },
    {
    key: "e0q8g",
    data: { },
    text: "make a quick update for fun",
    type: "unstyled",
    depth: 0,
    entityRanges: [ ],
    inlineStyleRanges: [ ]
    },
    {
    key: "31rkk",
    data: { },
    text: "update this one ",
    type: "unstyled",
    depth: 0,
    entityRanges: [ ],
    inlineStyleRanges: [ ]
    }
    ],
    entityMap: { }
    },
    date_created: "1621275865939",
    last_modified: "1622236566291"
    },
    {
    id: 4,
    title: "new note 1",
    category: "personal",
    note: {
    blocks: [
    {
    key: "44v9q",
    data: { },
    text: "testing one two",
    type: "unstyled",
    depth: 0,
    entityRanges: [ ],
    inlineStyleRanges: [ ]
    }
    ],
    entityMap: { }
    },
    date_created: "1621272775955",
    last_modified: null
    },
    {
    id: 5,
    title: "testing",
    category: null,
    note: {
    blocks: [
    {
    key: "8p988",
    data: { },
    text: "test one two",
    type: "unstyled",
    depth: 0,
    entityRanges: [ ],
    inlineStyleRanges: [ ]
    }
    ],
    entityMap: { }
    },
    date_created: "1621275190839",
    last_modified: null
    }
    ];
    
it ("Renders the noteList", async () => {
  const { getByText, getAllByText } = render(<NoteList savedNotes={notes} />);
  expect(getByText('Writing notes is fun')).toBeInTheDocument;
  expect(getAllByText('Edit')).toBeInTheDocument;
  expect(getByText("new note 1")).toBeInTheDocument;
});

it("Renders the appropriate buttons to select and delete notes", async () => {
  const { getAllByText } = render(<NoteList savedNotes={notes} />);
  expect(getAllByText('Edit')).toBeInTheDocument;
  expect(getAllByText('Delete')).toBeInTheDocument;
});

it("filters the notelist according to category", () => {
  const{ getByText, getByTestId, queryByText } = render(<NoteList savedNotes={notes} />);
  fireEvent.click(getByTestId("personalButton"));
  expect(queryByText("Writing notes is fun")).not.toBeInTheDocument;
  expect(getByText("new note 1")).toBeInTheDocument;
  fireEvent.click(getByTestId('allButton'));
  expect(getByText("Writing notes is fun")).toBeInTheDocument;
})
});



