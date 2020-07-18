import React from 'react';
import './Footer.css';
import SocialMedia from './SocialMedia';


function Footer() {
  return (
    <div className="FooterStyles">
      <h4>&copy;2020 Hart Of The Home Creations</h4>
      <div className="ContactBar">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Footer;