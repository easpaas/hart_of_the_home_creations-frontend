import React from 'react';
import './ProductCard.css';

function ProductCard(props) {
  const {name, description, price} = props;
  return (
    <div className="Card">
      <div className="Image">
        {
          // TODO 
          // map over images array
          // only use first image for preview
        }
      </div>
      <div className="Content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;