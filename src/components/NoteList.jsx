import React, { useState } from 'react';
import NoteListItem from './NoteListItem';
import './styles.scss';
import './Notelist.scss';
import ViewCategories from './ViewCategories';


export default function NoteList({savedNotes, selectedNote, setNotes, setSelectedNote, update}) {
  const [viewCategory, setViewCategory] = useState(null);

  const chooseViewCategory = (event) => {
    if (event.target.value === "all") {
      setViewCategory(null);
    } else {
      setViewCategory(event.target.value);
    }
  }

    const parsedNotes = 
    savedNotes
    .filter (note => note.category === viewCategory || viewCategory === null )
    .map(note => {
       
      return <NoteListItem content={note.note}
                           noteId={note.id} 
                           key={note.id} 
                           title={note.title} 
                           selectedNote={selectedNote}
                           date={note.date_created}
                           modified={note.last_modified}
                           setNotes={setNotes}
                           notes={savedNotes}
                           selectedNote={selectedNote}
                           setSelectedNote={setSelectedNote}
                           update={update}
                           />
      
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