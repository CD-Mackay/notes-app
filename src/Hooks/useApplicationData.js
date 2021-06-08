import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useApplicationData() {

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  

  useEffect(() => {
   getAllNotes();
  }, []);

  function getAllNotes() {
    axios({
      method: 'get',
      url: '/notes'
    })
    .then(res => {
      setNotes(res.data);
    })
    .catch(err => console.log(err));
  };


  function deleteNote(id) {
  axios({
      method: 'delete',
      url: `/notes/${id}`
    })
    .then(getAllNotes())
    .catch(err => console.log(err));
  };

  function updateNote(note, id, title, category) {
    console.log(note);
    const currentDate = Date.now();
    console.log(currentDate);
    console.log(Date.now());
    const updatedNote = {
      note: note,
      category: category,
      title: title,
      last_modified: currentDate
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
    const currentDate = Date.now();
    console.log(currentDate);
    console.log(Date.now());
    const savedNote = {
      title: title,
      category: category,
      note: note,
      date_created: currentDate
    };

    axios({
      method: 'post',
      url: '/notes',
      data: { savedNote }
    })
    .then(getAllNotes())
    .catch(err => console.log(err));
  };

  function getNoteById(id) {
    return notes.filter(note => note.id === id);
  };

  function selectNote(id) {
    console.log(id);
    const note = getNoteById(id);
    const selected = note.shift();
    setSelectedNote(selected);
  };

  function clearEditor() {
    setSelectedNote(null);
  }

  function getDate(milliseconds) {
    if (milliseconds) {
    let current = Date.now();
    let elapsed = ((current - milliseconds) / 1000) / 31536000;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " year ago";
    }
    elapsed = elapsed * 12;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " months ago";
    }
    elapsed = elapsed * 30; 
    if (elapsed > 1) {
      return Math.floor(elapsed) + " days ago";
    }
    elapsed = elapsed * 24;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " hours ago";
    }
    elapsed = elapsed * 60;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " minutes ago";
    }
    elapsed = elapsed * 60;
    return Math.floor(elapsed) + " seconds ago";
  }
  };


  return { saveNote, deleteNote, notes, getNoteById, updateNote, selectedNote, selectNote,getAllNotes, setNotes, getDate, clearEditor }
}





