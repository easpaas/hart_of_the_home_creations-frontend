import React from 'react';
import Styled from 'styled-components';


const FooterStyles = Styled.div`
  background-color: black;
`;


const Title = Styled.p`
  font-size: 1.2rem;
  color: lightpink;
  padding: 1%;
`;

function Footer() {
  return (
    <FooterStyles>
      <Title>&copy; Hart & Home 2020</Title>
    </FooterStyles>
  )
}

export default Footer;