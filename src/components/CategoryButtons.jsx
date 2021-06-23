import React, { useEffect } from 'react';
import './Categorystyles.scss';

export default function CategoryButtons(props) {

  const baseCats = ["Work", "Personal", "Hobbies"];

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
    <div className="editButtons" >
      <div className="cat-button-wrapper">
        <input type="text" placeholder="enter new category" onChange={props.onSelectCategory} name="category"></input>
      </div>
    </div>
   
  )
}