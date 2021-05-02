import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Footer() {

  
  return (
    <div className="footer">
      <h4>Connor Mackay</h4>
      <p><a href="https://github.com/CD-Mackay" className="anchor-link" target="blank">Github
      <FontAwesomeIcon icon={['fab', 'github-alt']} className="anchor-icon" />
      </a></p>
    </div>
  )
}