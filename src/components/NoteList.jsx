import React from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';
import './Notelist.scss';

export default function NoteList(props) {

    const parsedNotes = props.savedNotes.map(note => {
      if (note.note) {
      return <NoteListItem content={note.note}
                           noteId={note.id} 
                           key={note.id} 
                           title={note.title} 
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