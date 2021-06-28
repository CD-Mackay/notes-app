import React, { useEffect, useState } from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw, RichUtils } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';
import './Editor.scss';
import ButtonList from './ButtonList';
import CategoryInput from './CategoryInput';
import Helpers from '../Hooks/useApplicationData';

export default function MyEditor({setSelectedNote, selectedNote, fetchAndSetNotes, notes}) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  let [saveCategory, setSaveCategory] = useState(null);


  let selected = selectedNote;


  const handleTitleChange = event => setTitle(event.currentTarget.value);

  const chooseSaveCategory = (event) => {
    if (event.target.value === "none") {
      setSaveCategory(null);
    } else {
    setSaveCategory(event.target.value);
    };
  };

  
  const save = (incState) => {
    if (saveCategory) {
      saveCategory = saveCategory.toLowerCase();
    }
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    Helpers.saveNote(convertedState, saveCategory, title);
    fetchAndSetNotes();
  };

  const newNote = () => {
    setEditorState(EditorState.createEmpty());
    setTitle("");
    setSelectedNote(null);
    setSaveCategory(null);
  };

  const update = (incState) => {
    if (saveCategory) {
      saveCategory = saveCategory.toLowerCase();
    };
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    Helpers.updateNote(convertedState, selected.id, title, saveCategory); 
    fetchAndSetNotes();   
  };

  useEffect(() => {
    if (selected) {
      const noteToEdit = selected.note
      const selectedNote = EditorState.createWithContent(convertFromRaw(JSON.parse(JSON.stringify(noteToEdit))));
      setEditorState(selectedNote);
      setTitle(selected.title);
      setSaveCategory(selected.category);
    };
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
    <CategoryInput onSelectCategory={chooseSaveCategory} category={saveCategory} lastCat={"none"} />
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
    <button className="new-note" onClick={newNote} >
      <p className="hover-text">&lt;</p>
      New
      <p className="hover-text">/&gt;</p>
    </button>
      </div>
    </div>
  );
};