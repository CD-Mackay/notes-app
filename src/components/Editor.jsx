import React, { useEffect, componentDidMount } from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw, createEditorState } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export default function MyEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
  );

  const selected = props.selectedNote;

  const onChange = (incState) => {
    setEditorState(incState);
  };

  const save = (incState) => {
    console.log("EDITORSTATE!!!", incState);
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    props.onSave(convertedState);
    console.log('saved', convertedState);
  };

  const update = (incState) => {
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
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
    } else {
      console.log("no note selected");
    }
  }, [selected]);

  return (
    <div className="editor"> 
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