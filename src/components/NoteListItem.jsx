import React from 'react';
import useApplicationData from '../Hooks/useApplicationData';
import "./styles.scss";

export default function NoteListItem(props) {

  const { getDate } = useApplicationData();

  const deleteNote = () => {
    props.delete(props.noteId);
  }
  const showDate = getDate(props.date);
  const showEdited = getDate(props.modified);
  
  const edit = () => {
     props.onSelect(props.noteId);
      }

  return (
  <div className="note-wrapper">
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