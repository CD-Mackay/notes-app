import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useApplicationData() {

  function saveNote(title, text) {
    const note = {
      title: title,
      text: text
    }

    return axios({
      method: 'post',
      url: '/',
      data: { note }
    }).catch(err => console.log(err));
  }

    return { saveNote }
}





