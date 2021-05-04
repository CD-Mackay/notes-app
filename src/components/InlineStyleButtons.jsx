import React from 'react';


export default function InlineStyleButtons(props) {
  return (
    <button onMouseDown={props.setStyle} data-style={props.style} textstyle={props.style}>{props.icon}</button>
  )
}