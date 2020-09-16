import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './actions.js';

/* 
  Dispatches an action to the cart reducer, 
  that adds a new item to the shopping cart
*/
export const addToCart = (product) => {
  return dispatch => {
    dispatch({ type: ADD_TO_CART, payload: product})
  }
}