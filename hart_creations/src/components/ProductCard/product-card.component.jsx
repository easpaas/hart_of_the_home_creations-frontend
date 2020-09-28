import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import product1 from '../assets/sheep_chair.jpg';

import './product-card.styles.scss';

const ProductCard = () => (
  <div className='product-card'>
    <div className='image-container'>
      <img src={product1} alt="sheep chair" />
    </div>
    <div className='content'>
      <h2>NAME</h2>
      <p>DESCRIPTION</p>
      <p>$PRICE</p>
      <Button id='purchase'>
        <AddShoppingCart />
      </Button>
    </div>
  </div>
);

export default ProductCard;