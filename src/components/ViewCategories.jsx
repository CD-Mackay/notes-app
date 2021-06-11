import React from 'react';
import './Categorystyles.scss';

export default function ViewCategories(props) {
  return (
    <div className="notesButtons" onChange={props.onSelect}>
      <button onClick={props.onSelect} value="work">Work</button>
      <button onClick={props.onSelect} value="personal">Personal</button>
      <button onClick={props.onSelect} value="hobbies">Hobbies</button>
      <button onClick={props.onSelect} value="all">All</button>
    </div>
   
  );
};