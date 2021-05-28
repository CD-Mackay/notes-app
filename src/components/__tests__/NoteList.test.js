import React from 'react';
import { render, cleanup, getByText, getByTestId, getByPlaceholderText, screen } from '@testing-library/react';
import { useAlert } from 'react-alert';

import NoteList from '../NoteList';
import NoteListItem from '../NoteListItem';

describe("NoteList", () => {
it ("Renders the noteList", () => {
  const notes = [{
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
  ]
  const { getByText } = render(<NoteList savedNotes={notes} />);
  expect(getByText('Writing notes is fun')).toBeInTheDocument;
  
})});

// // it("renders its `children` prop as text", () => {
// //   const { getByText } = render(<Button>Default</Button>);
// //   expect(getByText("Default")).toBeInTheDocument();
// // });

