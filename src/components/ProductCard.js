import React from 'react';
import product1 from '../assets/sheep_chair.jpg';

import './css/ProductCard.css';

function ProductCard(props) {
  const {name, description, price} = props;
  return (
    <div className="Card">
      <h3>{name}</h3>
      <div className="Image">
        <img src={product1} alt="sheep chair product"/>
      </div>
      <div className="Content">
        <p>{price}</p>  
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;