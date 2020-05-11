import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import {BsPlusCircle} from 'react-icons/bs';


const Card = styled.div`
  width: 27%;
  margin: 4% 0;
  border: 1px solid gray;
  color: gray;
  text-align: center;
`;

const Image = styled.div`
  max-width: 100%;
  &:hover {
    filter: blur(1px);
  }
`;

const Add = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 5%;
  margin-bottom: 5%;
`;


function ProductCard() {
  return (
    <Card>
      <h3>Product Title</h3>
      <Image>
        <FontAwesomeIcon icon={faImage} size="7x" />
      </Image>
      <Add>
        <BsPlusCircle size="2rem" />
      </Add>
    </Card>
  );
}

export default ProductCard;