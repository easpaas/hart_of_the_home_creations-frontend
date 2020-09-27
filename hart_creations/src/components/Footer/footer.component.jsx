import React from 'react';

import SocialMedia from './SocialMedia';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer-styles">
    <h4>&copy;2020 Hart Of The Home Creations</h4>
    <div className="contact">
      <SocialMedia />
    </div>
  </div>
);

export default Footer;