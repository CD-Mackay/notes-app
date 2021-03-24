import logo from './logo.svg';
import './App.css';

/// import components
import Input from './components/Input';


// Import Hooks
import useApplicationData from './Hooks/useApplicationData';

function App() {

const { saveNote, deleteNote } = useApplicationData();

  return (
    <div className="App">
      <Input onDelete={deleteNote} onSave={saveNote} />
    </div>
  );
}

export default App;
