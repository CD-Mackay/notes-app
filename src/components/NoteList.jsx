import React from 'react';
import NoteListItem from './NoteListItem';

export default function NoteList(props) {

  const parsedNotes = props.savedNotes.map(note => {
    if (note.note && note.note.title) {
    return <NoteListItem noteId={note.id} key={note.id} title={note.note.title} delete={props.onDelete}text={note.note.text} />
    }
  })
  return (
    <div>
      { parsedNotes }
    </div>
  );
}