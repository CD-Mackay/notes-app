import React from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';

export default function NoteList(props) {

  const parsedNotes = props.savedNotes.map(note => {
    if (note.note) {
    return <NoteListItem content={note.note._immutable} noteId={note.id} key={note.id} title={note.note.title} delete={props.onDelete}text={note.note.text} />
    }
  })
  return (
    <div className="notes">
      { parsedNotes }
    </div>
  );
}