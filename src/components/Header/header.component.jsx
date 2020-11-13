import React from 'react';
import { Link } from 'react-router-dom';

import homeBanner from '../../assets/home-banner.jpg';

import { RiShoppingBagLine } from 'react-icons/ri';

import SearchField from '../SearchField/search.component';
import './header.styles.scss';

const Header = () => {


  return (
    <div className="header">
      <div className="title">
        <h1>Hart Of The Home Creations</h1> 
        <p>Inspired by life. Powered by love</p>
      </div>
      <div className="options">

        <div className="nav-links">
          <Link className="option" to="/">HOME</Link>
          <Link className="option" to="/shop">SHOP</Link>
          <Link className="option" to="/about" >ABOUT US</Link>
        </div>
      
        <div className="search-cart">
          <SearchField />
          <Link to="/cart" className="option">
            <div className="cart-link">
              <RiShoppingBagLine />
            </div>
          </Link>
        </div> 
      
      </div> {/* closes options */}
    </div> /* closes header */
  )
};

export default Header;