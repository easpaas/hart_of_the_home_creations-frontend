import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


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
  font-family: 'Gotu', sans-serif;
  border: 1px solid grey;
  padding: 1%;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: 'Gotu', sans-serif;
`;

const Header = () => {
  return ( 
    <HeaderStyles >
      <Title>Hart & Home</Title>
      <Nav>
        <StyledLink><Link to="/" style={{textDecoration: "none", color: "grey"}}>Home</Link></StyledLink>
        <StyledLink><Link to="/shop" style={{textDecoration: "none", color: "grey"}}>Shop</Link></StyledLink>
        <StyledLink><Link to="/about" style={{textDecoration: "none", color: "grey"}}>About</Link></StyledLink>
        <StyledLink><Link to="/contact" style={{textDecoration: "none", color: "grey"}}>Contact</Link></StyledLink>
      </Nav>
    </HeaderStyles>
  )
}

export default Header;