import React, {useState, useEffect} from 'react';
import './css/Shop.css';

import {auth} from'../utils/auth';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';


const testProducts = [
  {
    id: 21,
    name: 'Dining Room Chair #1',
    description: 'In scelerisque neque sit amet eros convallis, et dapibus felis fringilla. Ut mattis luctus sagittis. Integer vulputate vitae dui eu scelerisque. Morbi sit amet molestie lorem. Cras nec eleifend quam. Suspendisse potenti. Aliquam at elementum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: 25.00
  },
  {
    id: 22,
    name: 'Dining Room Chair #2',
    description: '1 of 4 chairs with matching sheep',
    price: 25.00
  },
  {
    id: 23,
    name: 'Dining Room Chair #3',
    description: '1 of 4 chairs with matching sheep',
    price: 25.00
  },
  {
    id: 24,
    name: 'Dining Room Chair #4',
    description: '1 of 4 chairs with matching sheep',
    price: 25.00
  }
]

function Shop() {
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([])
  const [error, setError] = useState({})
  const [fakeProducts, setFakeProducts] = useState(testProducts)

  // useEffect(() => {
  //   auth()
  //     .get("http://localhost:8080/api/products")
  //     .then(response => {
  //       // TODO - response.data should contain a data
  //       // object with products array and images array
  //       setProducts(response.data)
        
  //       // setProducts(response.data.products);
  //       // setProductImages(response.data.images)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       // TODO assign error appropriately
  //     });
  // }, []);

  return (
    <>
    <Header />
    <div className="ShopContainer">
      {/* {
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
      } */}
      {
        testProducts.length > 0 
        ? 
        testProducts.map(item => {
          return (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })
        :
        setError({ProductsNotFound: "No products found"})
      }
      <div style={{width: '50%', margin: '2% auto', color: 'red'}}>
        <p>{error.ProductsNotFound}</p>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Shop;