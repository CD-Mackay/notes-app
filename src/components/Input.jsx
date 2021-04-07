import React, { useState } from 'react';

export default function Input(props) {
  const [state, setState] = useState({
    title: "",
    text: "",
    error: null
  });

  const isValid = () => {
    console.log(state);
    if (state.title !== "" && state.text !== "") {
      console.log("true");
      return true;
    }
    console.log("false");
    return false;
  }
  const save = () => {
    if (isValid()) {
      console.log("saving in input component!");
      props.onSave(state.title, state.text);
    } else {
      console.log("save failed");
      setState(prev => ({...prev, error: "Notes must contain a title and text"}));
    }
    
  }

  const remove = () => {
    console.log('deleting in input component');
    props.onDelete(state.title, state.text);
  }

  return (
  <form onSubmit={event => event.preventDefault()}>
      <input type="text" name="title" value={state.title} placeholder="Title"
      onChange={event => setState(prev => ({...prev, title: event.target.value}))}></input>

      <textarea name="text" value={state.text} placeholder="all your thoughts go here"
      onChange={event => setState(prev => ({...prev, text: event.target.value}))}>
      </textarea>
      <button className="save" onClick={save}>Save</button>
      <button className="delete" onClick={remove}>Delete</button>
      {state.error && <p>{state.error}</p>}
    </form>
  )
}