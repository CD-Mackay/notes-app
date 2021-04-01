import React from 'react';
import {Editor, EditorState} from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export default function MyEditor() {
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
    <button onClick={() => submit()}type="submit">Save</button>
    {/* </form> */}
    </div>
  )
}