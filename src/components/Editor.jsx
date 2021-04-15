import React, { useEffect } from 'react';
import {Editor, EditorState} from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export default function MyEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  useEffect(() => {
    if (props.selectedNote) {
      console.log("there is a selected note");
      setEditorState(props.getNote(props.selectedNote[0].id));
    }
  }, []);
  
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