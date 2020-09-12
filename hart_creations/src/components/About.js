import React from "react";
import './css/About.css';
import contact from '../assets/contact.png';

import Header from "./Header";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";


function About() {
  return (
    <>
      <Header />
      <div className="AboutContainer">
        <div className="AboutContent">
          <img id="profile" src={contact} alt="vicki_hunter" />
          <div className="Profile">
              <h2 style={{ fontVariant: 'small-caps' }}>Vicki Hunter</h2>
              <p>
I love to craft and to create unique Home Decor. I have loved crafting for as long as I can remember! I'm loving chalking, making cards and paper crafting!</p>
          </div>
        </div>
        <div className="ContactBar">
          <SocialMedia />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
