import React, { useState } from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';
import './Notelist.scss';
import CategoryButtons from './CategoryButtons';
import ViewCategories from './ViewCategories';


export default function NoteList(props) {
  const [viewCategory, setViewCategory] = useState(null);

  const chooseViewCategory = (event) => {
    if (event.target.value == "all") {
      setViewCategory(null);
    } else {
      setViewCategory(event.target.value);
    }
  }

    const parsedNotes = props.savedNotes
    .filter (note => note.category == viewCategory || viewCategory == null )
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
      {/* <CategoryButtons whereAreTheButton={"notesButtons"} onSelect={chooseViewCategory} lastCat={"all"} /> */}
      <ViewCategories whereAreTheButton={"notesButtons"} onSelect={chooseViewCategory} lastCat={"all"} />
      { parsedNotes }
    </div>
  );
}