import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

import Header from './Header';
import Footer from './Footer';

const ImageContainer = styled.div`
  width: 60%;
  height: 50vh;
  margin: 5% auto;
  background-color: black;
  border: 1px solid grey;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

function Home() {
  return (
    <>
    <Header />
    <div className='Home'>
      <h1 style={{fontFamily: 'Playfair Display, san-serif'}}>Welcome</h1>
      <ImageContainer>
        <FontAwesomeIcon icon={faImage} size="7x" />
      </ImageContainer>
    </div>
    <Footer />
    </>
  );
}

export default Home;