import logo from './logo.svg';
import './App.css';

/// import components
import Input from './components/Input';
import NoteList from './components/NoteList';



// Import Hooks
import useApplicationData from './Hooks/useApplicationData';

function App() {

const { saveNote, deleteNote, notes } = useApplicationData();

  return (
    <div className="App">
      <Input onDelete={deleteNote} onSave={saveNote} />
      <NoteList savedNotes={notes} />
    </div>
  );
}

export default App;
