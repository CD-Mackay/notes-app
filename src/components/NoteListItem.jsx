import React from 'react';
import "./styles.scss";

export default function NoteListItem(props) {
  return (
  <div className="note-wrapper">
    <h4>{props.title}</h4>
    <span>{props.text}</span>
    <button className="delete" onClick={() => props.delete(props.noteId)}>Delete</button>
  </div>
  );
}