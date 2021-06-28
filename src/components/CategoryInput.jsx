import React from 'react';
import './Categorystyles.scss';

export default function CategoryButtons({category, onSelectCategory}) {

  return (
    <div className="editButtons" >
      <div className="cat-button-wrapper">
        <input type="text" placeholder="enter save category" value={category} onChange={onSelectCategory} name="category"></input>
      </div>
    </div>
   
  )
}