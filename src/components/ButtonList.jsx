import React from 'react';
import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa';
import InlineStyleButtons from './InlineStyleButtons';


export default function ButtonList(props) {

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
    setStyle={props.toggleInlineStyle}
    >
      {button.style}
    </InlineStyleButtons>
  })
}