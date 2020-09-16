import React from 'react';
import product1 from '../assets/sheep_chair.jpg';
import {addToCart} from '../redux/cart/actionCreators.js'

import './css/ProductCard.css';

function ProductCard(props) {
  const {name, description, price} = props;
  return (
    <div className="Card">
      <div className="Image">
        <img src={product1} alt="sheep chair product"/>
      </div>
      <div className="Content">
        <h2>{name}</h2>
        <p style={{fontSize: '1.3rem'}}>${price}</p>  
        <p>{description}</p>
        
        <button onClick={() => console.log('added')}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;