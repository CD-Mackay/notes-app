import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


/// import components
import Input from './components/Input';
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';



// Import Hooks
import useApplicationData from './Hooks/useApplicationData';

function App() {

const { saveNote, deleteNote, notes } = useApplicationData();

  return (
    <Router>
    <div className="App">
      <Input onDelete={deleteNote} onSave={saveNote} />
      <NoteList savedNotes={notes} onDelete={deleteNote} />
      <Route path="notes/:id">
      <MyEditor />
      </Route>
    </div>
    </Router>
  );
}

export default App;
