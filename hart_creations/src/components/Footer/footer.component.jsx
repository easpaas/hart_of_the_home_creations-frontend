import React from 'react';

import SocialMediaIcons from '../SocialMediaIcons/social-media-icons.component';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer-styles">
    <h4>&copy;2020 Hart Of The Home Creations</h4>
    <div className="contact">
      <SocialMediaIcons />
    </div>
  </div>
);

export default Footer;