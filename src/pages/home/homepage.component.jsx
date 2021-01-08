import React, { useState } from 'react';

import SHOP_DATA from './shop.data.js';

import ProductCard from '../../components/ProductCard/product-card.component';

import './homepage.styles.scss';

const HomePage = () => {
  const [collections] = useState(SHOP_DATA);

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
          </p>
        </div>
      </div>
      <div className='featured-product-wrapper'>
        <h2>Featured Products</h2>
        <div className="featured-products">
          { 
            collections[1].items.map((item,index) => {
              // isFeatured is a quick add-on 
              // to adjust css properties for ProductCard
              return (
                <ProductCard key={index} isFeatured={true} item={item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default HomePage;
