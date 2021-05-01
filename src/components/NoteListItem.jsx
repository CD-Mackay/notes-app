import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import "./styles.scss";

export default function NoteListItem(props) {
  const history = useHistory();


  const remove = () => {
    console.log('setState!')
    props.delete(props.noteId);
  }

  const edit = () => {
    console.log('selecting note')
     props.onSelect(props.noteId);
     history.push(`/${props.noteId}`);
      }

  return (
  <div className="note-wrapper">
    <h4>{props.noteId}</h4>
    {props.text && <span>{props.text}</span>}
    {/* {!props.text && <span>Untitled</span>} */}
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