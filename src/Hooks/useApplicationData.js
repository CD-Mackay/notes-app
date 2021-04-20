import axios from 'axios';
import { useEffect, useState } from 'react';
import {Editor, EditorState} from 'draft-js';


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

    setNotes([...notes, note]);
    
    return axios({
      method: 'post',
      url: '/notes',
      data: { note }
    }).catch(err => console.log(err));
  };

  function getNoteById(id) {
    return notes.filter(note => note.id === id);
  }

  function selectNote(id) {
    console.log(id);
    console.log(getNoteById(id));
    setSelectedNote(getNoteById(id));
  }


  
    return { saveNote, deleteNote, notes, getNoteById, updateNote, selectedNote, selectNote }
}





