import React, {useState, useEffect} from 'react';
import './css/Shop.css';

import {auth} from'../utils/auth';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';


function Shop() {
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([])

  useEffect(() => {
    auth()
      .get("http://localhost:8080/api/products")
      .then(response => {
        // TODO - response.data should contain a data
        // object with products array and images array
        setProducts(response.data)
        
        // setProducts(response.data.products);
        // setProductImages(response.data.images)
      })
      .catch(error => {
        console.log(error);
        // TODO assign error appropriately
      });
  }, []);

  return (
    <>
    <Header />
    <div className="ShopContainer">
      {
        // Return a list of products from server
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