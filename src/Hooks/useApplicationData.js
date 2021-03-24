import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useApplicationData() {

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
      data: JSON.stringify({ note })
    }).catch(err => console.log(err));
  };

    return { saveNote }
}





