import React from 'react';
import { render, cleanup, getByText, getByTestId, screen } from '@testing-library/react';

import NoteList from '../NoteList';


describe("NoteList", () => {
it ("Renders the noteList", () => {
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
    
  ]

  render(<NoteList savedNotes={notes} current={null} />);
  expect(screen.getByTestId("noteList")).toHaveTextContent("Writing notes is fun");
})});
