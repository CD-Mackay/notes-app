import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useApplicationData() {

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [category, setCategory] = useState(null);
  

  useEffect(() => {
    axios({
      method: 'get',
      url: 'notes'
    })
    .then(res => {
      setNotes(res.data);
    })
    .catch(err => console.log(err));
  }, []);


  function deleteNote(id) {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);

    return axios({
      method: 'delete',
      url: '/notes',
      data: { id }
    }).catch(err => console.log(err));
  };

  function updateNote(note, id, title, category) {
    console.log(note);
    const updatedNote = {
      note: note,
      category: category,
      title: title
    }
    return axios({
      method: 'put',
      url: `notes/${id}`,
      data: { updatedNote }
    }).catch(err => console.log(err));
  };


  function saveNote(note, category, title) {
    console.log('saving in hooks!')
    console.log(note);

    const savedNote = {
      title: title,
      category: category,
      note: note
    }

    console.log(savedNote);
    setNotes([...notes, savedNote]);
    
    return axios({
      method: 'post',
      url: '/notes',
      data: { savedNote }
    }).catch(err => console.log(err));
  };

  function getNoteById(id) {
    return notes.filter(note => note.id === id);
  }

  function selectNote(id) {
    console.log(id);
    const note = getNoteById(id);
    const selected = note.shift();
    setSelectedNote(selected);
  }


  return { saveNote, deleteNote, notes, getNoteById, updateNote, selectedNote, selectNote }
}





