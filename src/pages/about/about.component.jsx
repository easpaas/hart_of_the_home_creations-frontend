import React from "react";

import contact from '../../assets/contact.png';
import Footer from "../../components/Footer/footer.component";
import SocialMedia from "../../components/SocialMediaIcons/social-media-icons.component";

import './about.styles.scss';

const About = () => (
  <>
  <div className="about-page">
    <div className="about-content">
      <img id="profile" src={contact} alt="Vicki Hunter" />
      <div className="profile">
        <h2>Vicki Hunter</h2>
        <p>
          {/*TODO - ask Vicki for about page preferences*/}
          I love to craft and to create unique Home Decor. I have loved crafting for as long as I can remember! I'm loving chalking, making cards and paper crafting! 
          {/* Taken from FB page */}
        </p>
      </div>
    </div>
    <div className="contact-bar">
      <SocialMedia />
    </div>
  </div>
  </>
);

export default About;