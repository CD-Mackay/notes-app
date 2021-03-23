import React from 'react';
import Button from './Button';

export default function Input() {
  return (
    <form>
      <textarea>

      </textarea>
      <Button message="save" />
      <Button message="delete" />
    </form>
  )
}