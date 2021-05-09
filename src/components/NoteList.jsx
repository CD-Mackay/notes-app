import React, { useState } from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';
import './Notelist.scss';
import CategoryButtons from './CategoryButtons';


export default function NoteList(props) {
  const [category, setCategory] = useState(null);

  const chooseCategory = (event) => {
    if (event.target.value == "all") {
      setCategory(null);
    } else {
      setCategory(event.target.value);
    }
  }

    const parsedNotes = props.savedNotes
    .filter (note => note.category == category || category == null )
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
      <CategoryButtons onSelect={chooseCategory} lastCat={"all"} />
      { parsedNotes }
    </div>
  );
}