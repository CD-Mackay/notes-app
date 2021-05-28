import useApplicationData from './useApplicationData';
import * as React from 'react'
import {render, act} from '@testing-library/react'


// test("getAppointmentsForDay returns an array", () => {
//   const result = getAppointmentsForDay(state, "Monday");
//   expect(Array.isArray(result)).toBe(true);
// });
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
  ]

test('getNotesByID returns a single note object', () => {
  const results = useApplicationData.getNoteById(4);
  expect(results.id).toEqual = 4;
});