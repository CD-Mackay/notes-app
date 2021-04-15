import React, { useEffect } from 'react';
import {Editor, EditorState, convertToRaw } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export default function MyEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  console.log(props.selectedNote);
  const selected = props.selectedNote;

  useEffect(() => {
    if (selected) {
      console.log("there is a selected note");
      console.log(selected[0].note);
      const noteText = selected[0].note;
      //const content = convertToRaw(noteText);

      //setEditorState(content);
    }
  }, [selected]);

  return (
    <div className="editor"> 
    <Editor editorState={editorState} onChange={setEditorState} placeholder="WRITE SOMETHING!"/>
    <button className="save" onClick={() => props.onSave(editorState)} >
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