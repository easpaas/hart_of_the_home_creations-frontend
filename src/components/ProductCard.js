import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import product1 from '../assets/sheep_chair.jpg';

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
        <p>{description}</p>
        <p>${price}</p>  
        <Button id="purchase">
          <AddShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;