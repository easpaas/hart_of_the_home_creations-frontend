import React from 'react';
import { Link } from 'react-router-dom';

import { RiShoppingBagLine } from 'react-icons/ri';

import SearchField from '../SearchField/search.component';
import './header.styles.scss';

const Header = () => {
  const [isInitialHeader, setIsInitialHeader] = React.useState(true)
  
  // HandleScroll allows tracking of vertical scroll position
  const handleScroll = (event) => {
    let currentYOffset = event.path[1].scrollY;

    if (currentYOffset <= 130) {
      setIsInitialHeader(!isInitialHeader)
    }
  }

  // Add event listener for scroll events to redirect to handleScroll 
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className={isInitialHeader ? 'header-banner' : 'header-bar'}>
      <Link to="/" className={isInitialHeader ? 'banner-title' : 'bar-title'}>
          <h1>Hart Of The Home Creations</h1> 
          <p>Inspired by life. Powered by love.</p>
      </Link>
      <div className={isInitialHeader ? 'banner-options' : 'bar-options'}>
        <div className={isInitialHeader ? 'banner-nav-links' : 'bar-nav-links'}>    
          <Link className={isInitialHeader ? 'banner-option' : 'bar-option'} to="/shop">SHOP</Link>
          <Link className={isInitialHeader ? 'banner-option' : 'bar-option'} to="/blog">BLOG</Link>
          <Link className={isInitialHeader ? 'banner-option' : 'bar-option'} to="/about" >ABOUT US</Link>
        </div>
        <div className={isInitialHeader ? 'banner-search-field' : 'bar-search-field'}>     
          <SearchField />
          <Link to="/cart" className={isInitialHeader ? 'banner-option' : 'bar-option'}>
            <div className={isInitialHeader ? 'banner-cart-link' : 'bar-cart-link'}>
              <RiShoppingBagLine />
              Cart (0) {/* cart count will go here */}
            </div>
          </Link>
        </div> 
      </div> 
    </div> 
  )
};

export default Header;