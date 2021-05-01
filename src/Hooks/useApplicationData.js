import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useApplicationData() {

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  

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

  function updateNote(note, id) {
    console.log(note);
    
    return axios({
      method: 'put',
      url: `notes/${id}`,
      data: { note }
    }).catch(err => console.log(err));
  };


  function saveNote(note, title) {
    console.log('saving in hooks!')
    console.log(note);

    const savedNote = {
      title: title,
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





