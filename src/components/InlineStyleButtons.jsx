import React from 'react';


export default function InlineStyleButtons(props) {
  return (
    <button onMouseDown={props.setStyle} key={props.style} textStyle={props.style}>{props.icon}</button>
  )
}