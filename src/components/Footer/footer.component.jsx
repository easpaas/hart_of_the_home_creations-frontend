import React from 'react';

import { ReactComponent as Logo } from '../../assets/HHC-logo.svg';

import SocialMediaIcons from '../SocialMediaIcons/social-media-icons.component';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer-styles">
    <p id="copyright">&copy;2020 Hart Of The Home Creations</p>

    <div className="logo-container">
      <Logo className="logo" />
    </div>
    
    <div className="social-container">
      <p id="social">Follow Us</p>
      <SocialMediaIcons />
    </div>
  </div>
);

export default Footer;