import React, {useState, useEffect} from 'react';
import './css/Shop.css';

import {auth} from'../utils/auth';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';


function Shop() {
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([])
  const [error, setError] = useState({})

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
        setError({error: "No Products found"})
      });
  }, [products, error]);

  return (
    <>
    <Header />
    <div className="ShopContainer">
      {
        products.length > 0 
        ? 
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
        :
        <div style={{width: '50%', height: '800px', margin: '2% auto', color: 'red'}}>
          No products found
        </div>
      }
    </div>
    <Footer />
    </>
  );
}

export default Shop;