import React from 'react';

export default function CategoryButtons(props) {


  return (
    <div onChange={props.onSelect}>
      <label for="work">work</label>
      <input type="radio" id="work" name="category" value="work" ></input>
      <label for="personal">personal</label>
      <input type="radio" id="personal" name="category" value="personal"></input>
      <label for="hobbies">hobbies</label>
      <input type="radio" id="hobbies" name="category" value="hobbies"></input>
      </div>
   
  )
}