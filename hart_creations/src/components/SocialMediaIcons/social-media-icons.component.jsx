import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, 
  faInstagram, 
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

import './social-media-icons.styles.scss';


const SocialMediaIcons = () => (
  <div className='social-bar'>
    <a className='social-link' href="https://www.facebook.com/chalkcouturewithvickihunter/">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a className='social-link' href="https://www.instagram.com/iamvickihunter">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a className='social-link' href="https://www.pinterest.com/vickisscrapper">
      <FontAwesomeIcon icon={faPinterest} size="2x" />
    </a>
  </div>
);

export default SocialMediaIcons;