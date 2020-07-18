import React from "react";
import styled from "styled-components";
import contact from '../assets/contact.png';

import Header from "./Header";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";

const ContactBar = styled.div`
  background-color: black;
  color: grey;
  width: 40%;
  margin: 0% auto;
  padding: 2%;
`;

function About() {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "lightpink", padding: "5%" }}>
        <div style={{ maxWidth: "35%", margin: "2% auto", padding: '2%', backgroundColor: 'black' }}>
          <img src={contact} alt="vicki_hunter" style={{ width: "100%" }} />
          <div style={{ backgroundColor: 'lightpink', border: '2px solid', padding: '2%', color: 'black', marginTop: '2%' }}>
              <h2 style={{ fontVariant: 'small-caps' }}>Vicki Hunter</h2>
              <p>
I love to craft and to create unique Home Decor. I have loved crafting for as long as I can remember! I'm loving chalking, making cards and paper crafting!</p>
            
          </div>
        </div>
        <ContactBar>
          <SocialMedia />
        </ContactBar>
      </div>

      <Footer />
    </>
  );
}

export default About;
