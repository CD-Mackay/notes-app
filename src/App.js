import logo from './logo.svg';
import './App.css';

/// import components
import Input from './components/Input';
import NoteList from './components/NoteList';
import MyEditor from './components/Editor';



// Import Hooks
import useApplicationData from './Hooks/useApplicationData';

function App() {

const { saveNote, deleteNote, notes } = useApplicationData();

  return (
    <div className="App">
      {/* <Input onDelete={deleteNote} onSave={saveNote} />
      <NoteList savedNotes={notes} /> */}
      <MyEditor />
    </div>
  );
}

export default App;
