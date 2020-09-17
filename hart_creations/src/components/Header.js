import React from 'react';
import { Link } from 'react-router-dom';
import {RiShoppingBagLine} from 'react-icons/ri';

import './css/Header.css';

const Header = () => (
  <div className="header">
    <h1>Hart Of The Home Creations</h1>
    <div className="options">
      <Link className="option" to="/" >HOME</Link>
      <Link className="option" to="/shop" >SHOP</Link>
      <Link className="option" to="/about" >ABOUT</Link>
    </div>
    <div className="cart">
      <Link to="/cart" style={{textDecoration: "none", color: "lightpink"}} className="option">
        <div className="cart-link">
          <RiShoppingBagLine />
        </div>
      </Link>
    </div>
  </div>
);

export default Header;