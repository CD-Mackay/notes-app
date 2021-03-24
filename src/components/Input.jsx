import React, { useState } from 'react';
import Button from './Button';

export default function Input(props) {
  const [state, setState] = useState({
    title: "",
    text: ""
  });

  const save = () => {
    props.onSave(state.title, state.text)
    .then(res => {
      console.log(res);
    })
  }

  return (
  <form onSubmit={event => event.preventDefault()}>
      
      <input type="text" name="title"  onChange={event => setState(prev => ({...prev, title: event.target.value, text: ""}))}></input>
      <textarea name="text" onChange={event => setState(prev => ({...prev, text: event.target.value}))}>

      </textarea>
      <Button message="save" onClick={() => props.onSave(state.title, state.text)} />
      <Button message="delete" />
    </form>
  )
}