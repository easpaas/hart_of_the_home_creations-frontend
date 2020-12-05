import React, { useState } from 'react';

import SHOP_DATA from './shop.data.js';

import ProductCard from '../../components/ProductCard/product-card.component';

import './homepage.styles.scss';

const HomePage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className='home-page'>
      <div className='welcome-section'>
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
      </div>
      <div className='featured-product-wrapper'>
        <h2>Featured Products</h2>
        <div className="featured-products">
          { 
            collections[1].items.map((item,index) => {
              return (
                <ProductCard key={index} item={item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default HomePage;
