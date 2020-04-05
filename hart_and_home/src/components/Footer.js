import React from 'react';
import Styled from 'styled-components';


const FooterStyles = Styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  margin: 0;
`;

const Title = Styled.h4`
  color: lightpink;
  padding: 1%;
  font-family: 'Gotu', sans-serif;
  margin: 0;
`;

function Footer() {
  return (
    <FooterStyles>
      <Title>&copy;2020 Hart Of The Home Creations</Title>
    </FooterStyles>
  )
}

export default Footer;