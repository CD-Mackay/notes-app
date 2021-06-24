import React from 'react';
import './Categorystyles.scss';

export default function ViewCategories(props) {

  function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
  };

  let categories = props.notes
  .map(note => {
    return note.category;
  });

    categories = removeDuplicates(categories);
    categories = categories
    .filter(cat => cat !== null)
    .map(cat => <option key={cat} value={cat}>{cat}</option>)


  return (
    <div className="notesButtons" onChange={props.onSelect}>
      <label htmlFor="categories">Sort by category</label>
      <select name="categories" id="categories">
      {categories}
      <option value="all">all</option>
      </select>
    </div>  
   
  );
};