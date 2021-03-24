import React, { useState } from 'react';
import Button from './Button';
import './styles.scss';

export default function Input(props) {
  const [state, setState] = useState({
    title: "",
    text: ""
  });

  const save = () => {
    console.log("saving in input component!");
    props.onSave(state.title, state.text);
  }

  const remove = () => {
    console.log('deleting in input component');
    props.onDelete(state.title, state.text);
  }

  return (
  <form onSubmit={event => event.preventDefault()}>
      <input type="text" name="title" value={state.title} 
      onChange={event => setState(prev => ({...prev, title: event.target.value}))}></input>

      <textarea name="text" value={state.text} 
      onChange={event => setState(prev => ({...prev, text: event.target.value}))}>
      </textarea>

      <button onClick={save}>Save</button>
      <button onClick={remove}>Delete</button>
    </form>
  )
}