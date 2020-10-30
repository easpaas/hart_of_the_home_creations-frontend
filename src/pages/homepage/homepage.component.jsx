import React, { useState, useEffect } from 'react';


import { auth } from '../../utils/auth';
// import BlogsPreview from '../../components/BlogsPreview/blogs-preview.component';
import ProductCard from '../../components/ProductCard/product-card.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='home-page'>
    <div className='welcome-content'>
      <h1>Welcome</h1>
      <p>
        We are a unique online retail store that offers lifestyle, home decor and garden products. 
        <br />
        <br />
        Our mission is to create an online experience where our guests feel welcome to come in and discover unique and sophisticated items that will inspire their lives.
        <br />
        <br />
        We offer free shipping on any U.S. order over $100.
      </p>
    </div>
    <div className='featured-product-wrapper'>
      <h2>Featured Products</h2>
      <div className="featured-products">
        {/* TODO - map and render top four porducts */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    {/* <BlogsPreview /> */}
  </div>
);

export default HomePage;
