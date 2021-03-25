import React from 'react';
import NoteListItem from './NoteListItem';

export default function NoteList(props) {

  const parsedNotes = props.savedNotes.map(note => {
    return <NoteListItem key={note.id} title={note.title} />
  })
  return (
    <div>
      { parsedNotes }
    </div>
  );
}