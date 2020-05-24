import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const DeckContainer = styled.div`
  background-color: black;
  max-width: 80%;
  margin: 0 auto;
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
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/products")
  //     .then(products => {
  //       console.log(products);
  //       // TODO setProducts(products)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       // TODO assign error appropriately
  //     });
  // }, []);

  return (
    <>
    <Header />
    <div style={{backgroundColor: 'lightpink', padding: '5%' }} className="Shop">
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