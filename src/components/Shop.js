import React, {useState, useEffect} from 'react';
import './css/Shop.css';

import {auth} from'../utils/auth';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import {ProductList as OfflineProducts} from '../utils/ProductsList.data.js';


function Shop() {
  const [products, setProducts] = useState([]);
  const [offlineProducts, setOfflineProducts] = useState([]);
  const [productImages, setProductImages] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    auth()
      .get("http://localhost:8080/api/products")
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error);
        setError({error: "No Products found"})
        setOfflineProducts(OfflineProducts)
      });
  }, [products, error]);

  return (
    <>
    <Header />
    <div className="ShopContainer">
      {
        products.length > 0 ?
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
        offlineProducts.map(item => {
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