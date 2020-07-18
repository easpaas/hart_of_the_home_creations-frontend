import React, {useState, useEffect} from 'react';
import './Shop.css';

import {auth} from'../utils/auth';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';


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
              key={item.product_id}
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