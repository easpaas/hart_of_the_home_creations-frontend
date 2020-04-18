import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import SocialMedia from './SocialMedia';


const ContactBar = styled.div`
  background-color: black;
  color: grey;
  width: 60%;
  margin: 5% auto;
  padding: 2%;
`;

function Contact() {
  return (
    <>
      <Header />
      <ContactBar>
        <SocialMedia />
      </ContactBar>
      <Footer />
    </>
  );
}

export default Contact;