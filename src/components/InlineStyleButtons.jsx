import React from 'react';
import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa';


export default function InlineStyleButtons(props) {
  return (
    <div className="button">
    <button onMouseDown={props.setStyle} key={props.style} textStyle={props.style}>{props.icon}</button>
    </div>
  )
}