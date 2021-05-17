import React, { useState } from 'react';
import './styles.scss';


export default function InlineStyleButtons(props) {
  const [engaged, setEngaged] = useState(false);

  
  const selectStyle = () => {
    if (engaged) {
      setEngaged(false);
    } else {
      setEngaged(true);
    }

  }
  return (
    <button className={engaged ? "style-button" : "dark-button"} onClick={selectStyle} onMouseDown={props.setStyle} data-style={props.style} textstyle={props.style}>{props.icon}</button>
  )
}