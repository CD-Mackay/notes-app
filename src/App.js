import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


/// import components
import Input from './components/Input';
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';
import Header from './components/Header';



// Import Hooks
import useApplicationData from './Hooks/useApplicationData';

function App() {

const { saveNote, deleteNote, notes } = useApplicationData();

  return (
    <Router>
    <div className="App">
      <Header />
      {/* <Input onDelete={deleteNote} onSave={saveNote} /> */}
      {/* <Route path="notes/editor"> */}
      <div className="page-wrapper">
      <NoteList savedNotes={notes} onDelete={deleteNote} />
      <MyEditor onSave={saveNote} onDelete={deleteNote} />
      {/* </Route> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
