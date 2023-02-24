import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./SocialWidget.scss";

function SocialWidget() {
  return (
    <div className='social-widget'>
      <a href='https://www.instagram.com/thegrowthkeys/' target='_blank'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href='mailto:jesus@thegrowthkeys.com'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default SocialWidget;
