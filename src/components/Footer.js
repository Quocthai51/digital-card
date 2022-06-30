import React from "react";
import {
  faGithubSquare,
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="Footer">
      <FontAwesomeIcon icon={faTwitterSquare} className="iconFooter" />
      <FontAwesomeIcon icon={faFacebookSquare} className="iconFooter" />
      <FontAwesomeIcon icon={faInstagramSquare} className="iconFooter" />
      <FontAwesomeIcon icon={faGithubSquare} className="iconFooter" />
    </div>
  );
}

export default Footer;
