import React from 'react';
import "./styles.scss";

export default function NoteListItem(props) {
  return (
  <div className="note-wrapper">
    <h4>{props.title}</h4>
    <span>{props.text}</span>
    <button className="delete" onClick={() => props.delete(props.noteId)}>
    <p className="hover-text">&lt;</p>
      Delete
      <p className="hover-text">/&gt; </p>
    </button>
    <button className="modify">
    <p className="hover-text">&lt;</p>
      Edit
    <p className="hover-text">/&gt; </p>
    </button>
  </div>
  );
}