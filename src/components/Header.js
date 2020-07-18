import React, {useState, useEffect} from 'react';
import Login from './Login';
import './Header.css';

import {Link} from 'react-router-dom';
import {RiShoppingBagLine} from 'react-icons/ri';


const Header = () => {
  const [loginClick, setLoginClick] = useState(false)

  // useEffect(() => {

  // }, [loginClick])

  return ( 
    <>
    <div className="login">
      {
        loginClick ?
        <Login />
        :
        <div 
          className="login_btn" 
          onClick={() => {
            setLoginClick(true)
          }}
        >
          Login
        </div> 
      }
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