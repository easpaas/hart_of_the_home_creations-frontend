import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/cart-icon.component';
import CartDropdown from '../CartDropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';


const Header = ({ hidden, currentUser }) => (
  <div className='header-bar'>

    <Link to="/" className='bar-title'>
        <h1>Hart Of The Home Creations</h1> 
        <p>Inspired by life. Powered by love.</p>
    </Link>
{/* 
    <div className='nav-links'>    
      <Link className='option' to="/shop">SHOP</Link>
      <Link className='option' to="/blog">BLOG</Link>
      <Link className='option' to="/about" >ABOUT</Link>
    </div>

    <div className="signin">
      {
        currentUser ? 
          <div 
            className='sign-in-out' 
            onClick={() => auth.signOut()}
          >
            <Link to='/'>SIGN OUT</Link>
          </div>
        : 
          <Link className="option" to='/signin'>
            SIGN IN
          </Link>
      }
      <CartIcon /> */}
    {/* </div>  */}
    { hidden ? null : <CartDropdown /> }
  </div> 
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);