import React from "react";

import contact from '../../assets/contact.png';

import './about.styles.scss';

const About = () => (
  <div className="about-page">
    <div className="profile-content">
      <div className="profile-text">
        <h2>Vicki Hunter</h2>
        <p>
          {/*TODO - ask Vicki for about page preferences*/}
          I love to craft and to create unique Home Decor. I have loved crafting for as long as I can remember! I'm loving chalking, making cards and paper crafting! 
          {/* Taken from FB page */}
        </p>
      </div>
      <img id="profile" src={contact} alt="Vicki Hunter" />
    </div>
  </div>
);

export default About;
