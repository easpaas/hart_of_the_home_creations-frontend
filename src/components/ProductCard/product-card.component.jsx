import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';

import './product-card.styles.scss';

const ProductCard = ({ item, addItemToCart }) => {
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
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(ProductCard);
