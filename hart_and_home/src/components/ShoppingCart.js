import React from "react";
import styled from "styled-components";
import "../App.css";

import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

const Product = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Content = styled.div`
  width: 75%;
  margin: 4% 0;
  display: flex;
  justify-content: space-evenly;
`;

const Total = styled.div`
  border: 2px dashed;
  padding: 3%;
  display: flex;
  justify-content: space-evenly;
  margin: 4% auto;
`;

const Order = styled.div`
background-color: black;
color: lightpink;
border: 1px solid;
padding: 1%;
border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <div className="shopping-cart">
        <p style={{color: 'red', fontSize: '1.5rem', border: '4px dashed red', padding: '2%'}}>Dummy items placed in cart to simulate items in the shopping cart.</p>
        {/* 
                        TODO 
            *************************************
            Map function that renders a <Product /> 
            depending on number of items in cart.
            ***************************************
        */}
        <Product>
          <ProductCard />
          <Content>
            <p>Quantity: {}</p>
            <p>Price: {}</p>
            <p>Total: {}</p>
          </Content>
        </Product>
        <Product>
          <ProductCard />
          <Content>
            <p>Quantity: {}</p>
            <p>Price: {}</p>
            <p>Total: {}</p>
          </Content>
        </Product>
        <Product>
          <ProductCard />
          <Content>
            <p>Quantity: {}</p>
            <p>Price: {}</p>
            <p>Total: {}</p>
          </Content>
        </Product>
        <Total>
          <h2 style={{margin: '0'}}>TOTAL: </h2>
          <Order onClick={() => {console.log('Order Ready to complete')}}>
            Complete Order
          </Order>
        </Total>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
