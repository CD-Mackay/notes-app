import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Editor, EditorState} from 'draft-js';


/// import components
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';
import Header from './components/Header';



// Import Hooks
import useApplicationData from './Hooks/useApplicationData';

function App() {

const { saveNote, deleteNote, notes, getNoteById, selectedNote } = useApplicationData();

const [editorState, setEditorState] = useState(
  () => EditorState.createEmpty(),
);

if (selectedNote) {
  setEditorState()
}


  return (
    <Router>
      <Route path="/">
    <div className="App">
      <Header />
      <div className="page-wrapper">
      <NoteList savedNotes={notes} onDelete={deleteNote} getNote={getNoteById} />
      <MyEditor onSave={saveNote} onDelete={deleteNote} notes={notes} getNote={getNoteById} />
      </div> 
    </div>
    </Route>
    <Route path="/notes/:noteID">
    <div className="App">
      <Header />
      <div className="page-wrapper">
      <NoteList savedNotes={notes} onDelete={deleteNote} getNote={getNoteById} />
      <MyEditor onSave={saveNote} onDelete={deleteNote} />
      </div> 
    </div>
    </Route>
    </Router>
  );
}

export default App;
