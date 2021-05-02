import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Import Hooks
import useApplicationData from './Hooks/useApplicationData';


/// import components
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';
import Header from './components/Header';
import Footer from './components/Footer';


// FontAwesome Imports 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee,  } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faGithubAlt,);







function App() {

const { saveNote, deleteNote, notes, getNoteById, selectedNote, selectNote, updateNote } = useApplicationData();



  return (
    <Router>
      <div className="App">
    <Header />
    <Switch>
      <Route path="/">
      <div className="page-wrapper">
        <NoteList savedNotes={notes} onDelete={deleteNote} getNote={getNoteById} selectedNote={selectedNote} onSelect={selectNote} />
        <MyEditor onSave={saveNote} onDelete={deleteNote} onEdit={updateNote} notes={notes} getNote={getNoteById} selectedNote={selectedNote} />
      </div>  
    </Route>
    <Route path="/:noteID">
      <div className="page-wrapper">
      <NoteList savedNotes={notes} onDelete={deleteNote} getNote={getNoteById} selectedNote={selectedNote} onSelect={selectNote} />
        <MyEditor onSave={saveNote} onDelete={deleteNote} notes={notes} getNote={getNoteById} selectedNote={selectedNote} />
      </div> 
    </Route>
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
