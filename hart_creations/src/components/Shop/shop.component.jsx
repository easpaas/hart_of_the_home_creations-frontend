import React, { useState, useEffect } from 'react';

import { auth } from '../../utils/auth';
import ProductCard from '../ProductCard/product-card.component';

const Shop = () => (
  <div className='shop-container'>
    SHOP HERE
    {
      // TODO - map over products list from redux and return a product card 
    }
  </div>
);

export default Shop;
