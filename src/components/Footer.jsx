import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {

  
  return (
    <div className="footer">
      <p>Connor Mackay</p>
      <FontAwesomeIcon icon="check-square" />
      <p><a href="https://github.com/CD-Mackay" className="anchor-link" target="blank">My Github</a></p>
    </div>
  )
}