import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Footer() {

  
  return (
    <div className="footer">
      <div className="icon-wrapper">
      <h4>Connor Mackay</h4>
      <p><a href="https://github.com/CD-Mackay" className="anchor-link" target="blank">
      <FontAwesomeIcon icon={['fab', 'github-alt']} className="anchor-icon" />
      </a></p>
      <p><a href="https://www.linkedin.com/in/connor-mackay-800992bb/" className="anchor-link" target="blank">
      <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      </a></p>
      <p><a href="mailto: connor.mackay@gmail.com" className="anchor-link" target="blank">
      <FontAwesomeIcon icon={["fa", "envelope"]}  />
      </a></p>
      </div>
    </div>
  )
}