import React, { useState } from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';
import './Notelist.scss';
import ViewCategories from './ViewCategories';


export default function NoteList(props) {
  const [viewCategory, setViewCategory] = useState(null);

  const chooseViewCategory = (event) => {
    if (event.target.value === "all") {
      setViewCategory(null);
    } else {
      setViewCategory(event.target.value);
    }
  }

    const parsedNotes = 
    props.savedNotes
    .filter (note => note.category === viewCategory || viewCategory === null )
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
                           date={note.date_created}
                           modified={note.last_modified}
                           />
      }
  })
  return (
    <div className="notes" data-testid="noteList">
      <ViewCategories onSelect={chooseViewCategory} currentCat={viewCategory} lastCat={"all"} />
      {viewCategory && <p>Category: {viewCategory}</p>}
      {viewCategory && parsedNotes.length > 0 && <p>{parsedNotes.length} notes in this category</p>}
      {!viewCategory && <p>Category: all</p>}
      { parsedNotes }
      {parsedNotes.length === 0 && <p>No notes in this category</p>}
    </div>
  );
}