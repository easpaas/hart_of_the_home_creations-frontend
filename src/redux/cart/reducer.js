import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './actions';

// Shopping Cart Redux Initial State 
export const initShoppingCart = {
  cart_items:[{
    product_id: null, 
    name: '', 
    description: '', 
    price: 0
  }],
  total_quantity: 0, 
}

export const cartReducer = (state = initShoppingCart, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart_items: [state.cart_items, action.payload] 
        
      }
    case REMOVE_FROM_CART:
      return {
        ...state, 
        cart_items: state.cart_items.filter(product_id => action.payload !== product_id)
      }
    case EMPTY_CART:
      return initShoppingCart
  }
}