import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup, getAllByPlaceholderText } from '@testing-library/react';
import App from '../../App';
import NoteList from '../NoteList';

afterEach(cleanup);

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

  it ("Loads without Crashing", async () => {
    const { getByText, getByPlaceholderText, debug } = render(<App />);
    debug();
    expect(getByText("A React App")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toBeInTheDocument;
  });

  it("loads the editor and notelist components", async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);
    expect(getByTestId("header")).toBeInTheDocument;
    expect(getByPlaceholderText("note title")).toHaveValue("");
  });

  it("updates the contents of the editor according to user input", () => {
    const { getByPlaceholderText } = render(<App />);
    fireEvent.click(getByPlaceholderText('note title'));
    fireEvent.change(getByPlaceholderText('note title'), {
      target: {value: "updated title"}
    });
    expect(getByPlaceholderText('note title')).toHaveValue("updated title");
  })
});