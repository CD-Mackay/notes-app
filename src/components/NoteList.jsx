import React from 'react';
import NoteListItem from './NoteListItem';

export default function NoteList(props) {

  const parsedNotes = props.savedNotes.map(note => {
    if (note.note) {
    return <NoteListItem key={note.note.id} title={note.note.title} />
    }
  })
  return (
    <div>
      { parsedNotes }
    </div>
  );
}