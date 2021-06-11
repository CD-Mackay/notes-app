import React from 'react';
import './Categorystyles.scss';

export default function ViewCategories(props) {
  return (
    <div className="notesButtons" onChange={props.onSelect}>
      <button className="modify" data-testid="workButton" onClick={props.onSelect} value="work">
      <p className="hover-text">&lt;</p>
        Work
        <p className="hover-text">/&gt; </p>
        </button>
      <button className="modify" data-testid="personalButton" onClick={props.onSelect} value="personal">
      <p className="hover-text">&lt;</p>
        Personal
        <p className="hover-text">/&gt; </p>
        </button>
      <button className="modify" onClick={props.onSelect} value="hobbies">
      <p className="hover-text">&lt;</p>
        Hobbies
        <p className="hover-text">/&gt; </p>
        </button>
      <button className="modify" data-testid="allButton" onClick={props.onSelect} value="all">
      <p className="hover-text">&lt;</p>
        All
        <p className="hover-text">/&gt; </p>
        </button>
    </div>  
   
  );
};