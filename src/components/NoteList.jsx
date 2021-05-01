import React, { useState } from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';

export default function NoteList(props) {
  const [notes, setNotes] = useState(props.savedNotes);


    const parsedNotes = props.savedNotes.map(note => {
      if (note.note) {
      return <NoteListItem content={note.note}
                           noteId={note.id} 
                           key={note.id} 
                           title={note.note.title} 
                           delete={props.onDelete} 
                           getNote={props.getNote}
                           selectedNote={props.selectedNote}
                           onSelect={props.onSelect}
                           />
      }

  })
  return (
    <div className="notes">
      { parsedNotes }
    </div>
  );
}