import React, { useState } from 'react';
import "./styles.scss";
import Helpers from '../Hooks/useApplicationData';

export default function NoteListItem(props) {

  const now = Date.now();


  const isNoteNew = () => {
    if (props.modified) {
      const elapsed = now - props.modified; 
      if (elapsed < 10000) {
        return true;
      } else {
        return false;
      }
    } else if (!props.modified) {
    const elapsed = now - props.date; 
    if (elapsed < 10000) {
      return true;
    } else {
      return false;
    }}
  };

  const [isNew, setIsNew] = useState(isNoteNew());

  const deleteNote = () => {
    Helpers.deleteNote(props.noteId);
    props.update();
  };
  
  const showDate = Helpers.getDate(props.date);
  const showEdited = Helpers.getDate(props.modified);
  
  const edit = () => {props.setSelectedNote(Helpers.selectNote(props.noteId, props.notes))};


  setTimeout(() => {
    setIsNew(false);
  }, 3000)

  return (
  <div className={isNew ? "new-wrapper" : "note-wrapper"}>
    {props.title && <span>{props.title}</span>}
    {!props.title && <span>Untitled</span>}
    <div className="date-wrapper">
      <p data-testid="date-info" >Created:  </p>
    <p>{showDate}</p>
    </div>
    {props.modified && <div className="date-wrapper">
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