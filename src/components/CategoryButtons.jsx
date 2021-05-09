import React from 'react';

export default function CategoryButtons(props) {
  return (
    <form className="category-form">
      <input type="radio" id="work" name="category" value="work"></input>
      <input type="radio" id="personal" name="category" value="personal"></input>
      <input type="radio" id="hobbies" name="category" value="hobbies"></input>
    </form>
  )
}