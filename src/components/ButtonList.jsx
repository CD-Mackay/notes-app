import React from 'react';
import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa';
import InlineStyleButtons from './InlineStyleButtons';


export default function ButtonList(props) {

  const inlineStyleButtons = [
    {
      style: 'BOLD',
      value: <FaBold />
    },
    {
      style: 'ITALIC',
      value: <FaItalic />
    },
    {
      style: 'UNDERLINE',
      value: <FaUnderline />
    },
    {
      style: 'STRIKETHROUGH',
      value: <FaStrikethrough />
    }
  ];

  const styleButtons = inlineStyleButtons.map((button) => {
    return <InlineStyleButtons style={button.style} setStyle={props.toggleInlineStyle} icon={button.value} />
  })

  return (
    <div className="button-burrito">
      {styleButtons}
    </div>
  )
}