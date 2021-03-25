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

  function deleteNote(title, text) {
    const note = {
      title: title,
      text: text
    };

    return axios({
      method: 'delete',
      url: '/notes',
      data: { note }
    }).catch(err => console.log(err));
  }
  function saveNote(title, text) {
    console.log('saving in hooks!')
    console.log(title, text);
    const note = {
      title: title,
      text: text
    }


    return axios({
      method: 'post',
      url: '/notes',
      data: { note }
    }).catch(err => console.log(err));
  };

    return { saveNote, deleteNote, notes }
}





