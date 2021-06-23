import React from 'react';
import './Categorystyles.scss';

export default function CategoryButtons(props) {

  return (
    <div className="editButtons" >
      <div className="cat-button-wrapper">
        <input type="text" placeholder="enter new category" onChange={props.onSelectCategory} name="category"></input>
      </div>
    </div>
   
  )
}