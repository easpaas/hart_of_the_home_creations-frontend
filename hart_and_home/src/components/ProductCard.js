import React from 'react';
import styled from 'styled-components';
import product from '../assests/logo192.png';


const Card = styled.div`
  width: 27%;
  margin: 4% 0;
  border: 1px solid gray;
  color: gray;
  text-align: center;
`;

const Image = styled.div`
  max-width: 100%;
`;

function ProductCard() {
  return (
    <Card>
      <h3>Product Title</h3>
      <Image>
        <img src={product} alt="react logo" style={{width: '100%'}}/>
      </Image>
    </Card>
  );
}

export default ProductCard;