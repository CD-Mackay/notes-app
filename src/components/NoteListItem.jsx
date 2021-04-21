import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./styles.scss";

export default function NoteListItem(props) {
  const [deleted, setDeleted] = useState(false);

  const remove = () => {
    setDeleted(true);
    console.log('setState!')
    props.delete(props.noteId);
  }

  const edit = () => {
    console.log('selecting note')
     props.onSelect(props.noteId)
      }

  return (
  <div className={deleted ? "deleted-note" : "note-wrapper"}>
    <h4>{props.title}</h4>
    {props.text && <span>{props.text}</span>}
    {!props.text && <span>Untitled</span>}
    <div className="button-wrapper">
    <button className="delete" onClick={() => remove()}>
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