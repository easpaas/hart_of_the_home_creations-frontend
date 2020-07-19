import React from 'react';
import './css/Footer.css';

import SocialMedia from './SocialMedia';


function Footer() {
  return (
    <div className="FooterStyles">
      <h4>&copy;2020 Hart Of The Home Creations</h4>
      <div className="Contact">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Footer;