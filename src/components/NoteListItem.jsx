import React from 'react';
import { useHistory } from 'react-router-dom';
import useApplicationData from '../Hooks/useApplicationData';
import "./styles.scss";

export default function NoteListItem(props) {
  const history = useHistory();

  const { getDate } = useApplicationData();

  const showDate = getDate(props.date);
  const showEdited = getDate(props.modified);
  const edit = () => {
    console.log('selecting note')
     props.onSelect(props.noteId);
     history.push(`/${props.noteId}`);
      }

  return (
  <div className="note-wrapper">
    {props.title && <span>{props.title}</span>}
    {!props.title && <span>Untitled</span>}
    <div className="date-wrapper">
      <p>Created:  </p>
    <p>{showDate}</p>
    </div>
    <div className="date-wrapper">
      <p>Last Edited:  </p>
    <p>{showEdited}</p>
    </div>
    <div className="button-wrapper">
    <button className="delete" onClick={() => props.delete(props.noteId)}>
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