import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

import Header from './Header';
import Footer from './Footer';

const ImageContainer = styled.div`
  width: 45%;
  margin: 0 auto;
  padding: 5%;
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
    <div style={{backgroundColor: 'lightpink', padding: '4%'}} className='Home'>
      <h1 style={{margin: '0', marginBottom: '4%', fontFamily: 'Playfair Display, san-serif'}}>Welcome</h1>
      <ImageContainer>
        <FontAwesomeIcon icon={faImage} size="7x" />
      </ImageContainer>
    </div>
    <Footer />
    </>
  );
}

export default Home;