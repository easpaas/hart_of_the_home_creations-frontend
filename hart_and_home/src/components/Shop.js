import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const DeckContainer = styled.div`
  background-color: black;
  max-width: 80%;
  margin: 5% auto;
`;

const ProductRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border: 1px solid gray;
`;

// TODO axios call for products, if pulling from database


function Shop() {

  // TODO assign state for products

  return (
    <>
    <Header />
    <div className="Shop">
      <h1>Shop</h1>
      <DeckContainer>
        {/* TODO pagination top right with 6/12/24 options for cards per page */}

        {/* TODO rows of 3 */}
        <ProductRow>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductRow>

        <ProductRow>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductRow>


        <ProductRow>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductRow>
        
        {/* TODO pagination bottom middle with page numbers based on number of products */}

      </DeckContainer>
    </div>
    <Footer />
    </>
  );
}

export default Shop;