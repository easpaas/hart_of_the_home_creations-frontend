import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {auth} from'../utils/auth';
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

  useEffect(() => {
    auth()
      .get("http://localhost:8080/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
        // TODO assign error appropriately
      });
  }, []);

  return (
    <>
    <Header />
    <div style={{backgroundColor: 'lightpink', padding: '5%' }}>
    {/* Return a list of products from database */}
      {
        products.map(item => {
          return (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.descrition}
              price={item.price}
            />
          );
        })
      }
    </div>
    <Footer />
    </>
  );
}

export default Shop;