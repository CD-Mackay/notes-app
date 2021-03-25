import React from 'react';
import NoteListItem from './NoteListItem';

export default function NoteList(props) {

  const parsedNotes = props.savedNotes[0].map(note => {
    console.log(props);
    console.log(props.savedNotes[0]);
    console.log(note);
    return <NoteListItem key={note.id} title={note.title} />
  })
  return (
    <div>
      { parsedNotes }
    </div>
  );
}