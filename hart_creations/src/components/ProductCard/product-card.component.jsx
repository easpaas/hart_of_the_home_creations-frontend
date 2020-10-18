import React from 'react';
import { Card, Button } from 'react-bootstrap'

import './product-card.styles.scss';

const ProductCard = () => (
  <div className='product-card'>
    <Card style={{ width: '18rem' }}>
      <span  className='image-container'>
        <img src="https://i.ibb.co/87kLCNv/sheep-chair.jpg" alt="sheep chalk print on gray wooden chair" />
      </span>
      <Card.Body>
        <h3>Title</h3>
        <Card.Text>
          Short description 
        </Card.Text>
        <Card.Text>
          $ Price
        </Card.Text>
        <Button style={{ backgroundColor: 'lightpink', padding: '1.5%'}}>Add To Cart</Button>
      </Card.Body>
    </Card>
  </div>
);

export default ProductCard;