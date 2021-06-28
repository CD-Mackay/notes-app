import React, { useState } from 'react';
import "./styles.scss";
import Helpers from '../Hooks/useApplicationData';

export default function NoteListItem({ noteId, title, date, modified, notes, setSelectedNote, update}) {

  const now = Date.now();


  const isNoteNew = () => {
    if (modified) {
      const elapsed = now - modified; 
      if (elapsed < 10000) {
        return true;
      } else {
        return false;
      }
    } else if (!modified) {
    const elapsed = now - date; 
    if (elapsed < 10000) {
      return true;
    } else {
      return false;
    }}
  };

  const [isNew, setIsNew] = useState(isNoteNew());

  const deleteNote = () => {
    Helpers.deleteNote(noteId);
    update();
  };
  
  const showDate = Helpers.getDate(date);
  const showEdited = Helpers.getDate(modified);
  
  const edit = () => {setSelectedNote(Helpers.selectNote(noteId, notes))};


  setTimeout(() => {
    setIsNew(false);
  }, 3000);

  return (
  <div className={isNew ? "new-wrapper" : "note-wrapper"}>
    {title && <span>{title}</span>}
    {!title && <span>Untitled</span>}
    <div className="date-wrapper">
      <p data-testid="date-info" >Created:  </p>
    <p>{showDate}</p>
    </div>
    {modified && <div className="date-wrapper">
      <p>Last Edited:  </p>
    <p>{showEdited}</p>
    </div>}
    <div className="button-wrapper">
    <button className="delete" onClick={deleteNote}>
    <p className="hover-text">&lt;</p>
      Delete
      <p className="hover-text">/&gt; </p>
    </button>
    <button className="modify" onClick={edit} >
    <p className="hover-text">&lt;</p>
      Edit
    <p className="hover-text">/&gt; </p>
    </button>
    </div>
  </div>
  );
}