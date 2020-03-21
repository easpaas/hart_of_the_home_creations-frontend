import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.h1`
  background-color: black;
  color: lightpink;
  text-align: center;
  padding: 2%;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-size: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: grey;
  border: 1px solid grey;
  padding: 1%;
  &hover: color: white;
`;


const Header = () => {
  return ( 
    <HeaderStyles >
      <h1>Hart & Home</h1>
      <Nav>
        <StyledLink href="#">Home</StyledLink>
        <StyledLink href="#">Shop</StyledLink>
      </Nav>
    </HeaderStyles>
  )
}

export default Header;