import React from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';

export default function NoteList(props) {

    const parsedNotes = props.savedNotes.map(note => {
      if (note.note) {
        const focus = note.note._immutable.selection.focusKey;
        const content = note.note._immutable.currentContent.blockMap[focus].text;
      return <NoteListItem content={note.note._immutable.currentContent.blockMap} 
                           focus={note.note._immutable.selection.focusKey} 
                           noteId={note.id} 
                           key={note.id} 
                           title={note.note.title} 
                           delete={props.onDelete} 
                           text={content} 
                           getNote={props.getNote}
                           />
      }

  })
  return (
    <div className="notes">
      { parsedNotes }
    </div>
  );
}