import React from 'react';
import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa'


export default function InlineStyleButtons(props) {
  return (
    <button onMouseDown={props.setStyle} style={props.key}>{props.style}</button>
  )
}