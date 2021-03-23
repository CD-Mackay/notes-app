import React from 'react';
import Button from './Button';

export default function Input(props) {
  
  return (
    <form>
      <textarea>

      </textarea>
      <Button message="save" onClick={props.onSave} />
      <Button message="delete" />
    </form>
  )
}