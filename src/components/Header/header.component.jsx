import React from 'react';
import { Link } from 'react-router-dom';

import { RiShoppingBagLine } from 'react-icons/ri';

import SearchField from '../SearchField/search.component';
import './header.styles.scss';

const Header = () => (
    <div className='header-bar'>
      <Link to="/" className='bar-title'>
          <h1>Hart Of The Home Creations</h1> 
          <p>Inspired by life. Powered by love.</p>
      </Link>
      <div className='bar-options'>
        <div className='bar-nav-links'>    
          <Link className='bar-option' to="/shop">SHOP</Link>
          <Link className='bar-option' to="/blog">BLOG</Link>
          <Link className='bar-option' to="/about" >ABOUT US</Link>
        </div>
        <div className='bar-search-field'>     
          {/* <SearchField /> */}
          <Link to="/cart" className='bar-option'>
            <div className='bar-cart-link'>
              <RiShoppingBagLine />
              Cart (0) {/* cart count will go here */}
            </div>
          </Link>
        </div> 
      </div> 
    </div> 
);

export default Header;