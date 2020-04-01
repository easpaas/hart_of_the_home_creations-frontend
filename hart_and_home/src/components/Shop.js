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

const TopPagination = styled.div`
  width: 20%;
  margin-left: 73%;
  height: 5vh;
  display: flex;
  align-items: center;
  padding: 1% 0;
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

        <TopPagination>
          
          {/* TODO display number of product cards according to each link */}

          <p style={{color: 'lightpink', margin: '0'}}>results per page</p>
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
            <a href="#" style={{textDecoration: 'none', color: 'lightpink'}}>9</a>
            <p style={{color:'lightpink', margin: '0'}}>/</p>
            <a href="#" style={{textDecoration: 'none', color: 'lightpink'}}>12</a>
            <p style={{color:'lightpink', margin: '0'}}>/</p>
            <a href="#" style={{textDecoration: 'none', color: 'lightpink'}}>18</a>
          </div>
        </TopPagination>

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