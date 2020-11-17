import React, {useState} from 'react';

import SHOP_DATA from '../homepage/shop.data.js';
import ProductCard from '../../components/ProductCard/product-card.component';

import './shop-page.styles.scss';

const ShopPage = (props) => {
  const [shopData, setShopData] = useState(SHOP_DATA);

  return(
    <div className='shop-page'>
      {shopData[0].items.map((item, index) => {
          return (
            <ProductCard key={index} item={item} />
          )
        })
      }
    </div>
  )
};

export default ShopPage;