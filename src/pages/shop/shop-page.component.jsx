import React, {useState} from 'react';

import SHOP_DATA from '../home/shop.data';
import ProductCard from '../../components/ProductCard/product-card.component';

import './shop-page.styles.scss';

const ShopPage = (props) => {
  const [shopData] = useState(SHOP_DATA);

  return(
    <div className='shop-page'>
      <div className='shop-content'>
        {shopData[0].items.map((item, index) => {
            return (
              <ProductCard key={index} item={item} />
            )
          })
        }
      </div>
    </div>
  )
};

export default ShopPage;