import React, { useState } from 'react';
import Button from './Button';

export default function Input(props) {
  const [state, setState] = useState({
    title: "",
    text: ""
  });

  return (
    <form onSubmit={event => event.preventDefault}>
      <label for="title">Title</label>
      <input type="text" name="title"  onChange={event => setState(prev => ({...prev, title: event.target.value, text: ""}))}></input>
      <textarea name="text" onChange={event => setState(prev => ({...prev, text: event.target.value}))}>

      </textarea>
      <Button type="submit" message="save" onClick={props.onSave} />
      <Button message="delete" />
    </form>
  )
}