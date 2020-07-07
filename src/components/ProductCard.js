import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  width: 80%;
  margin: 2% auto;
  display: flex;
  justify-content: space-between;
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
    </Card>
  );
}

export default ProductCard;