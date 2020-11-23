import React from 'react';

import CustomButton from '../CustomButton/custom-button.component';

import './product-card.styles.scss';

const ProductCard = ({ item, /* addItemToCart from redux */ }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='product-card'>
      <div 
        className='image' 
        style={{ backgroundImage: `url(${imageUrl})` }} 
      />
      <div className='product-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton inverted onClick={() => console.log('add to cart')}>
        ADD TO CART
      </CustomButton>
    </div>
  )
};

export default ProductCard;