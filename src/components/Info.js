import React from "react";
import face from "../images/face.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Info() {
  return (
    <div className="Info">
      <img src={face} alt="face" />
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <small>laurasmith.website</small>
      <div className="ButtonGroup">

            <button><FontAwesomeIcon icon={faEnvelope} className="envelope-icon" /> Email</button>
            <button className="linkedin-btn"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" /> Linked In</button>
      </div>

    </div>
  );
}

export default Info;