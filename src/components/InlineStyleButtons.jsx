import React from 'react';
import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa'


export default function InlineStyleButtons(props) {

  const inlineStyleButtons = [
    {
      style: 'Bold',
      value: <FaBold />
    },
    {
      style: 'ITALIC',
      value: <FaItalic />
    }

  ];
  return inlineStyleButtons.map((button) => {
    <InlineStyleButtons 
    key={button.style}
    onMouseDown={props.toggleInlineStyle}
    >
      {button.style}
    </InlineStyleButtons>
  })
}