import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


/// import components
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';
import Header from './components/Header';



// Import Hooks
import useApplicationData from './Hooks/useApplicationData';

function App() {

const { saveNote, deleteNote, notes, getNoteById } = useApplicationData();


  return (
    <Router>
      <Route path="/">
    <div className="App">
      <Header />
      <div className="page-wrapper">
      <NoteList savedNotes={notes} onDelete={deleteNote} getNote={getNoteById} />
      <MyEditor onSave={saveNote} onDelete={deleteNote} />
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
