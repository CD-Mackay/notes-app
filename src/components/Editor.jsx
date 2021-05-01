import React, { useEffect, componentDidMount, useState } from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw, createEditorState } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export default function MyEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");

  const selected = props.selectedNote;


  const handleTitleChange = event => setTitle(event.currentTarget.value);

  const save = (incState) => {
    console.log("EDITORSTATE!!!", incState);
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    props.onSave(convertedState, title);
    console.log('saved', convertedState);
  };

  const update = (incState) => {
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    console.log('updated', convertedState);
    props.onEdit(convertedState, selected.id);
  }

  useEffect(() => {
    if (selected) {
      console.log("there is a selected note");
      console.log(selected);
      const noteToEdit = selected.note
      const selectedNote = EditorState.createWithContent(convertFromRaw(JSON.parse(JSON.stringify(noteToEdit))));
      console.log(selectedNote);
      setEditorState(selectedNote);
      setTitle(selected.title)
    } else {
      console.log("no note selected");
    }
  }, [selected]);

  return (
    <div className="editor"> 
    <input type="text" placeholder="note title" value={selected ? selected.title : ""} onChange={handleTitleChange} ></input>
    <Editor editorState={editorState} onChange={setEditorState} placeholder="WRITE SOMETHING!"/>
    <button className="save" onClick={selected ? () => update(editorState) : () => save(editorState)} >
    <p className="hover-text">&lt;</p>
      Save
      <p className="hover-text">/&gt; </p>
    </button>
    <button className="delete" onClick={props.onDelete} >
      <p className="hover-text">&lt;</p>
      Delete
      <p className="hover-text">/&gt; </p>
      </button>
    </div>
  )
}