import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 60%;
  height: 50vh;
  margin: 5% auto;
  background-color: black;
  border: 1px solid grey;
  color: grey;
  text-align: center;
  `;

function Home() {
  return (
    <div className='Home'>
      <h1>Home</h1>
      <ImageContainer>
        <p>Image will be placed here</p>
      </ImageContainer>
    </div>
  );
}

export default Home;