import React from 'react';

export default function CatButton(props) {
  return (
    <div className="cat-button-wrapper">
    <label htmlFor="personal">personal</label>
    <input type="radio" id="personal" name="category" value="personal"></input>
  </div>
  )
}