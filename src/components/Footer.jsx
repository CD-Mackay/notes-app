import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Footer() {

  
  return (
    <div className="footer">
      <p>Connor Mackay</p>
      

      <p><a href="https://github.com/CD-Mackay" className="anchor-link" target="blank">My Github
      <FontAwesomeIcon icon={['fab', 'github-alt']} className="anchor-icon" />
      </a></p>
    </div>
  )
}