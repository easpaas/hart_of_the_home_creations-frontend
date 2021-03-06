import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItem/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/Stripe/stripe-button.component';

import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total }) => {
  const shortid = require('shortid');

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        {/* <div className='header-block'>
          <span>Quantity</span>
        </div> */}
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => <CheckoutItem key={shortid.generate()} item={item} />)
      }
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 666
      </div>
      <div className='total'>
        TOTAL: ${total}
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);