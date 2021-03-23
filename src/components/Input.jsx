import React from 'react';
import Button from './Button';

export default function Input(props) {


  return (
    <form onSubmit={event => event.preventDefault}>
      <label for="title">Title</label>
      <input type="text" name="title"></input>
      <textarea name="text">

      </textarea>
      <Button type="submit" message="save" onClick={props.onSave} />
      <Button message="delete" />
    </form>
  )
}