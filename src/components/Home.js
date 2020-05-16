import React from 'react';
import styled from 'styled-components';
import home from '../assets/home.jpg';

import Header from './Header';
import Footer from './Footer';

const ImageContainer = styled.div`
  max-width: 35%;
  margin: 0 auto;
  background-color: black;
  border: 5px solid grey;
  border-radius: 10px;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  `;


function Home() {
  return (
    <>
    <Header />
    <div style={{backgroundColor: 'lightpink', padding: '4% 0' }} className='Home'>
      <h1 style={{marginBottom: '2%', fontFamily: 'Playfair Display, san-serif'}}>Welcome</h1>
      <ImageContainer>
        <img src={home} alt="home" style={{ width: '100%'}} />
      </ImageContainer>
    </div>
    <Footer />
    </>
  );
}

export default Home;