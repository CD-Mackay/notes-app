import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useApplicationData() {

  const [notes, setNotes] = useState([]);

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
    return axios({
      method: 'delete',
      url: '/notes',
      data: { id }
    }).catch(err => console.log(err));
  };

  function updateNote(note) {
    
    return axios({
      method: 'put',
      url: `notes/${note.id}`,
      data: { note }
    }).catch(err => console.log(err));
  };


  function saveNote(note) {
    console.log('saving in hooks!')
    console.log(note);
    
    return axios({
      method: 'post',
      url: '/notes',
      data: { note }
    }).catch(err => console.log(err));
  };

  function getNoteById(id) {
    return notes.filter(note => note.id === id);
  }


  
    return { saveNote, deleteNote, notes, getNoteById, updateNote }
}





