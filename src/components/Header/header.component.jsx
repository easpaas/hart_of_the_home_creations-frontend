import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/cart-icon.component';
import CartDropdown from '../CartDropdown/cart-dropdown.component';
import SearchField from '../SearchField/search.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';


const Header = ({ hidden }) => (
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
        </div> 
        <CartIcon />
      </div> 
      { hidden ? null : <CartDropdown /> }
    </div> 
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);