import React from 'react';
import styled from 'styled-components';
import product from '../assests/logo192.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'


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
        <FontAwesomeIcon icon={faImage} size="7x" />
      </Image>
    </Card>
  );
}

export default ProductCard;