import React, { useEffect, componentDidMount, useState } from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw, createEditorState, RichUtils } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';
import './Editor.scss';
import ButtonList from './ButtonList';
import CategoryButtons from './CategoryButtons';

export default function MyEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [saveCategory, setSaveCategory] = useState(null);

  const selected = props.selectedNote;


  const handleTitleChange = event => setTitle(event.currentTarget.value);

  const chooseSaveCategory = (event) => {
    if (event.target.value == "none") {
      setSaveCategory(null);
    } else {
    setSaveCategory(event.target.value);
    }
  }

  
  const save = (incState) => {
    console.log("EDITORSTATE!!!", incState);
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    props.onSave(convertedState, saveCategory, title);
    console.log('saved', convertedState);
  };

  const update = (incState) => {
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    console.log('updated', convertedState);
    props.onEdit(convertedState, selected.id, title, saveCategory);
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

  const toggleInlineStyle = (event) => {
    event.preventDefault();
    const style = event.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };


  return (
    <div className="editor"> 
    <div className="buttons">
    <ButtonList toggleInlineStyle={toggleInlineStyle} />
    <CategoryButtons whereAreTheButton={"editButtons"} onSelectCategory={chooseSaveCategory} lastCat={"none"} />
    </div>
     <div className="title-wrapper">
    <input type="text" placeholder="note title" value={title} onChange={handleTitleChange} />
    </div>
    <Editor editorState={editorState} onChange={setEditorState} placeholder="WRITE SOMETHING!"/>
    <div className="save-delete-wrapper">
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
    </div>
  )
}