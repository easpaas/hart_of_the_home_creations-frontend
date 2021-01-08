import React from 'react';

import  { ReactComponent as Logo } from '../../assets/HHC-logo.svg';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GylP3A767XgCBwd2XvHeShLOM8dN8x05sHjnHF4rjEZE9292GDZsdFy4VVGVgTIJAEeIhQQ8BFrSXft7COhWMHT00ignIcL00';

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
    // TODO 
    // add toast notification of success
    // check stripe for toast success notification 
    // or use Material-UI
  }

  return (
    <StripeCheckout 
      label="Pay Now" 
      name="Hart Of The Home Creations" 
      billingAddress 
      shippingAddress
      image='../../assets/HHC-logo.svg'
      description={`Your Total is: ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    /> 
  );
}

export default StripeCheckoutButton;