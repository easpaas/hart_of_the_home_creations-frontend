import React from 'react';
// import Login from './Login';
import './Header.css';

import {Link} from 'react-router-dom';
import {RiShoppingBagLine} from 'react-icons/ri';


const Header = () => {

  const handleClick = (e) => {
    e.preventDefault();
    console.log("login button clicked");
    //  TODO - <Login /> should display inputs for username and password
  };

  return ( 
    <>
    <div className="login">
      <div 
        className="login_btn" 
        onClick={handleClick}>
        Login
      </div>
    </div>
    <div className="Header" >
      <h1>Hart Of The Home Creations</h1>
      <div className="Nav">
        <Link to="/" style={{textDecoration: "none"}} className="Link">Home</Link>
        <Link to="/shop" style={{textDecoration: "none"}} className="Link">Shop</Link>
        <Link to="/about" style={{textDecoration: "none"}} className="Link">About</Link>
      </div>
      <div className="Cart">
        <Link to="/cart" style={{textDecoration: "none", color: "lightpink"}} className="Link">
          <div className="CartLink">
            <RiShoppingBagLine />
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Header;