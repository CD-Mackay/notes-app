import React from 'react';
import {Editor, EditorState} from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <Editor editorState={editorState} onChange={setEditorState} />
  )
}