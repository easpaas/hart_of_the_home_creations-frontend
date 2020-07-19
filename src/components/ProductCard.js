import React from 'react';
import product1 from '../assets/sheep_chair.jpg';

import './css/ProductCard.css';

function ProductCard(props) {
  const {name, description, price} = props;
  return (
    <div className="Card">
      <h2>{name}</h2>
      <div className="Image">
        <img src={product1} alt="sheep chair product"/>
      </div>
      <div className="Content">
        <p style={{fontSize: '1.3rem'}}>${price}</p>  
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;