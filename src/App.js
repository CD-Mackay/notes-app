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
      {/* <Input onDelete={deleteNote} onSave={saveNote} /> */}
      {/* <Route path="notes/editor"> */}
      <MyEditor onSave={saveNote} onDelete={deleteNote} />
      {/* </Route> */}
      <NoteList savedNotes={notes} onDelete={deleteNote} />
    </div>
    </Router>
  );
}

export default App;
