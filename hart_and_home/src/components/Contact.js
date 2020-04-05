import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import SocialMedia from './SocialMedia';


const Form = styled.div`
  background-color: black;
  color: grey;
  width: 60%;
  margin: 5% auto;
  padding: 2%;
`;

const FormTitle = styled.h2`
  font-family: 'Gotu', sans-serif;
`;

function Contact() {
  return (
    <>
      <Header />
      <Form>
        <SocialMedia />
      </Form>
      <Footer />
    </>
  );
}

export default Contact;