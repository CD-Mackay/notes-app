import React, { useState } from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';
import './Notelist.scss';
import CategoryButtons from './CategoryButtons';


export default function NoteList(props) {
  const [category, setCategory] = useState(null);

  const chooseCategory = (event) => {
    setCategory(event.target.value);
  }

    const parsedNotes = props.savedNotes
    .filter(note => {if (category) {return note.category == category }})
    .map(note => {
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
      <CategoryButtons onSelect={chooseCategory} />
      { parsedNotes }
    </div>
  );
}