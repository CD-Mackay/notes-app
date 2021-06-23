import React, { useEffect } from 'react';
import './Categorystyles.scss';

export default function CategoryButtons(props) {

  function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
  };

  let categories = props.notes
  .map(note => {
    return note.category;
  });

  useEffect(() => {
    categories = removeDuplicates(categories);
    console.log(categories);
  });

  return (
    <div className="editButtons" onChange={props.onSelectCategory}>
      <div className="cat-button-wrapper">
        <label htmlFor="work">work</label>
        <input type="radio" id="work" name="category" value="work" ></input>
      </div>
      <div className="cat-button-wrapper">
        <label htmlFor="personal">personal</label>
        <input type="radio" id="personal" name="category" value="personal"></input>
      </div>
      <div className="cat-button-wrapper">
        <label htmlFor="hobbies">hobbies</label>
        <input type="radio" id="hobbies" name="category" value="hobbies"></input>
      </div>
      <div className="cat-button-wrapper">
        <label htmlFor={props.lastCat}>{props.lastCat}</label>
        <input type="radio" id={props.lastCat} name="category" value={props.lastCat}></input>
      </div>
    </div>
   
  )
}