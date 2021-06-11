import './App.css';
import { React, useState, useEffect } from 'react';

// Import Hooks
import Helpers from './Hooks/useApplicationData';


/// import components
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';
import Header from './components/Header';
import Footer from './components/Footer';


// FontAwesome Imports 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope, faEnvelopeOpen,faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faGithubAlt, faLinkedinIn, faEnvelope, faEnvelopeOpen, faPhone);


function App() {

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  

  const fetchAndSetNotes = async () => {
    const saved = await Helpers.getAllNotes();
    setNotes(saved);
  };

  useEffect(() => {
    fetchAndSetNotes();
  }, []);

  return (
   
      <div className="App">
    <Header />
      <div className="page-wrapper">
        <NoteList savedNotes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} setNotes={setNotes} />
        <MyEditor onClear={setSelectedNote} notes={notes} selectedNote={selectedNote} />
      </div>
    <Footer />
    </div>
  );
}

export default App;
