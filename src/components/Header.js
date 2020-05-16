import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {RiShoppingBagLine} from 'react-icons/ri';


const HeaderStyles = styled.h1`
  background-color: black;
  color: lightpink;
  text-align: center;
  padding: 2%;
  margin: 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    font-size: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;
  font-size: 1.2rem;
  font-family: 'Playfair Display', serif;
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

const Cart = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 5%;
`;

const CartLink = styled.div`
  width: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return ( 
    <HeaderStyles >
      <Title>Hart Of The Home Creations</Title>
      <Nav>
        <StyledLink to="/" style={{textDecoration: "none"}}>HOME</StyledLink>
        <StyledLink to="/shop" style={{textDecoration: "none"}}>SHOP</StyledLink>
        <StyledLink to="/creations" style={{textDecoration: "none"}}>CREATIONS</StyledLink>
        <StyledLink to="/contact" style={{textDecoration: "none"}}>CONTACT</StyledLink>
      </Nav>
      <Cart>
        <Link to="/cart" style={{textDecoration: "none", color: "lightpink"}}>
          <CartLink>
          
          <RiShoppingBagLine />
        </CartLink>
        </Link>
      </Cart>
    </HeaderStyles>
  )
}

export default Header;