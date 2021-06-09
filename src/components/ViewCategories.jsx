import React from 'react';
import './Categorystyles.scss';

export default function ViewCategories(props) {
  return (
    <div className="notesButtons" onChange={props.onSelect}>
      <div className="cat-button-wrapper">
        <label htmlFor="work" className={props.currentCat === "work" ? "selected-cat" : "cat-button"}>work</label>
        <input type="radio" id="work" data-testid="workButton" name="category" value="work" ></input>
      </div>
      <div className="cat-button-wrapper">
        <label htmlFor="personal" className={props.currentCat === "personal" ? "selected-cat" : "cat-button"}>personal</label>
        <input type="radio" id="personal" data-testid="personalButton" name="category" value="personal"></input>
      </div>
      <div className="cat-button-wrapper">
        <label htmlFor="hobbies" className={props.currentCat === "hobbies" ? "selected-cat" : "cat-button"}>hobbies</label>
        <input type="radio" id="hobbies" name="category" value="hobbies"></input>
      </div>
      <div className="cat-button-wrapper">
        <label htmlFor={props.lastCat} className={props.currentCat == props.lastCat ? "selected-cat" : "cat-button"}>{props.lastCat}</label>
        <input type="radio" id={props.lastCat} data-testid="allButton" name="category" value={props.lastCat}></input>
      </div>
    </div>
   
  );
};