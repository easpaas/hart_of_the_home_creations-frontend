import React from 'react';

import { ReactComponent as Logo } from '../../assets/HHC-logo.svg';

import SocialMediaIcons from '../SocialMediaIcons/social-media-icons.component';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer-styles">
    <div className="logo-container">
      <Logo className="logo" />
    </div>
    <div className="contact">
      <p>Follow Us</p>
      <SocialMediaIcons id="social-icons" />
    </div>
    <p id="copyright">&copy;2020 Hart Of The Home Creations</p>
  </div>
);

export default Footer;