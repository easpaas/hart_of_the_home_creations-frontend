import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  width: 80%;
  margin: 4% auto;
  border: 4px solid gray;
  padding: 2%;
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


function ProductCard(props) {
  const {name, description, price} = props;
  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </Card>
  );
}

export default ProductCard;