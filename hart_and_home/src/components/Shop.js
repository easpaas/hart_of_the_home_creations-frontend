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
`;

const TopPagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 73%;
  width: 20%;
  color: lightpink;
`;

const PaginationContainer = styled.div`
  padding-top: 4%;
`;


// TODO axios call for products, if pulling from database


function Shop() {

  // TODO assign state for products

  return (
    <>
    <Header />
    <div className="Shop">
      <DeckContainer>
        <PaginationContainer>
          {/* TODO display number of product cards according to each link */}
          <TopPagination>
            <p>Products Per Page:</p>
            <p onClick={(e) => console.log(e.target)}>9</p>
            <p>|</p>
            <p onClick={(e) => console.log(e.target)}>12</p>
            <p>|</p>
            <p onClick={(e) => console.log(e.target)}>18</p>
        </TopPagination>
        </PaginationContainer>

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