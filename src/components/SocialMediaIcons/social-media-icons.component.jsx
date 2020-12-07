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
    <a className='facebook' href="https://www.facebook.com/chalkcouturewithvickihunter/">
      <FontAwesomeIcon icon={faFacebook} size="1x" />
    </a>
    <a className='instagram' href="https://www.instagram.com/iamvickihunter">
      <FontAwesomeIcon icon={faInstagram} size="1x" />
    </a>
    <a className='pinterest' href="https://www.pinterest.com/vickisscrapper">
      <FontAwesomeIcon icon={faPinterest} size="1x" />
    </a>
  </div>
);

export default SocialMediaIcons;