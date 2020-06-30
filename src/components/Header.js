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
  font-size: 3rem;
  font-family: 'Gotu', sans-serif;
  margin: 0%;
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

const SignIn = styled.p`
  background-color: black;
  text-align: left;
  color: grey;
  padding-top: 1%;
  margin: 0;
`;


const Header = () => {
  return ( 
    <>
    <SignIn onClick={() => {console.log('login modal will pop open here')}}>
      Login
    </SignIn>
    <HeaderStyles >
      <Title>Hart Of The Home Creations</Title>
      <Nav>
        <StyledLink to="/" style={{textDecoration: "none"}}>Home</StyledLink>
        <StyledLink to="/shop" style={{textDecoration: "none"}}>Shop</StyledLink>
        <StyledLink to="/about" style={{textDecoration: "none"}}>About</StyledLink>
      </Nav>
      <Cart>
        <Link to="/cart" style={{textDecoration: "none", color: "lightpink"}}>
          <CartLink>
            <RiShoppingBagLine />
          </CartLink>
        </Link>
      </Cart>
    </HeaderStyles>
    </>
  )
}

export default Header;