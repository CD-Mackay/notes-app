import React from 'react';
import {Editor, EditorState} from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export default function MyEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const submit = () => {
    console.log(editorState);
  }
  return (
    <div className="editor">
      {/* <form onSubmit={event => event.preventDefault()}> */}
    <Editor editorState={editorState} onChange={setEditorState} />
    <button className="save" onClick={() => props.onSave(editorState)} >Save</button>
    <button className="delete" onClick={props.onDelete} >Delete</button>
    {/* </form> */}
    </div>
  )
}