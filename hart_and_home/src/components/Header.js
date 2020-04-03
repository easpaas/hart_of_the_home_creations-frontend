import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HeaderStyles = styled.h1`
  background-color: black;
  color: lightpink;
  text-align: center;
  padding: 2%;
  margin: 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-size: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;
  font-family: 'Gotu', sans-serif;
  border: 1px solid grey;
  padding: 1%;
  &:hover {
    color: lightpink;
    border: 1px dashed grey;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-family: 'Gotu', sans-serif;
`;

const Header = () => {
  return ( 
    <HeaderStyles >
      <Title>Hart Of The Home Creations</Title>
      <Nav>
        <StyledLink to="/" style={{textDecoration: "none"}}>Home</StyledLink>
        <StyledLink to="/shop" style={{textDecoration: "none"}}>Shop</StyledLink>
        <StyledLink to="/contact" style={{textDecoration: "none"}}>Contact</StyledLink>
      </Nav>
    </HeaderStyles>
  )
}

export default Header;