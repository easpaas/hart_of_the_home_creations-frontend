import React from 'react';

import SocialMediaIcons from '../SocialMediaIcons/social-media-icons.component';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer-styles">
    <div className="footer-nav">
    </div>
  
    <div className="social-content">
      <div className="contact">
        <p>Follow Us</p>
        <SocialMediaIcons id="social-icons" />
      </div>
    </div>
  
    <p>&copy;2020 Hart Of The Home Creations</p>
  </div>
);

export default Footer;