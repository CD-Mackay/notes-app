import React, { useEffect, componentDidMount, useState } from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw, createEditorState, RichUtils } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';
import './Editor.scss';
import useApplicationData from '../Hooks/useApplicationData';
import ButtonList from './ButtonList';
import CategoryButtons from './CategoryButtons';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';


export default function MyEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [saveCategory, setSaveCategory] = useState(null);

  const history = useHistory();

  let selected = props.selectedNote;

  //const alert = useAlert();

  const handleTitleChange = event => setTitle(event.currentTarget.value);

  const chooseSaveCategory = (event) => {
    if (event.target.value == "none") {
      setSaveCategory(null);
    } else {
    setSaveCategory(event.target.value);
    }
  }

  
  const save = (incState) => {
   // alert.show('New note saved!')
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    props.onSave(convertedState, saveCategory, title);
  };

  const newNote = () => {
    setEditorState(EditorState.createEmpty());
    setTitle("");
    selected = null;
    //history.push('/');
  }

  const update = (incState) => {
    const convertedState = (JSON.stringify(convertToRaw(incState.getCurrentContent())));
    //history.push('/');
    props.onEdit(convertedState, selected.id, title, saveCategory);
    //alert.show('note saved!')
    
  }

  useEffect(() => {
    if (selected) {
      const noteToEdit = selected.note
      const selectedNote = EditorState.createWithContent(convertFromRaw(JSON.parse(JSON.stringify(noteToEdit))));
      setEditorState(selectedNote);
      setTitle(selected.title)
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
    <CategoryButtons onSelectCategory={chooseSaveCategory} lastCat={"none"} />
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
  )
}