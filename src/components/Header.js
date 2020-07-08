import React from 'react';
import './Header.css';

import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {RiShoppingBagLine} from 'react-icons/ri';


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

const CartLink = styled.div`
  width: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return ( 
    <>
    <div className="Hidden">
      <div 
        className="login_btn" 
        onClick={() => {
          console.log('login modal will pop open here')}
        }>
        Login
      </div>
    </div>
    <div className="Header" >
      <h1>Hart Of The Home Creations</h1>
      <div className="Nav">
        <StyledLink to="/" style={{textDecoration: "none"}}>Home</StyledLink>
        <StyledLink to="/shop" style={{textDecoration: "none"}}>Shop</StyledLink>
        <StyledLink to="/about" style={{textDecoration: "none"}}>About</StyledLink>
      </div>
      <div className="Cart">
        <Link to="/cart" style={{textDecoration: "none", color: "lightpink"}}>
          <CartLink>
            <RiShoppingBagLine />
          </CartLink>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Header;