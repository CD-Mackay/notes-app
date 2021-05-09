import React from 'react';
import './Categorystyles.scss';

export default function CategoryButtons(props) {

  return (
    <div className={props.whereAreTheButton} onChange={props.onSelect}>
      <div className="cat-button-wrapper">
        <label for="work">work</label>
        <input type="radio" id="work" name="category" value="work" ></input>
      </div>
      <div className="cat-button-wrapper">
        <label for="personal">personal</label>
        <input type="radio" id="personal" name="category" value="personal"></input>
      </div>
      <div className="cat-button-wrapper">
        <label for="hobbies">hobbies</label>
        <input type="radio" id="hobbies" name="category" value="hobbies"></input>
      </div>
      <div className="cat-button-wrapper">
        <label for={props.lastCat}>{props.lastCat}</label>
        <input type="radio" id={props.lastCat} name="category" value={props.lastCat}></input>
      </div>
    </div>
   
  )
}