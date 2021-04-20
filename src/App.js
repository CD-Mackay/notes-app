import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Import Hooks
import useApplicationData from './Hooks/useApplicationData';


/// import components
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';
import Header from './components/Header';
import Footer from './components/Footer';


// FontAwesome Imports 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faGithubSquare);







function App() {

const { saveNote, deleteNote, notes, getNoteById, selectedNote, selectNote } = useApplicationData();



  return (
    <Router>
      <Route path="/">
    <div className="App">
      <Header />
      <div className="page-wrapper">
      <NoteList savedNotes={notes} onDelete={deleteNote} getNote={getNoteById} selectedNote={selectedNote} onSelect={selectNote} />
      <MyEditor onSave={saveNote} onDelete={deleteNote} notes={notes} getNote={getNoteById} selectedNote={selectedNote} />
      </div> 
      <Footer />
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
