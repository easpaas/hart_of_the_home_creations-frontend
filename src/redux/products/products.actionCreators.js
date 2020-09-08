import axios from 'axios';
import {auth} from './../utils/auth';
import {FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from "./actions.js";


export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCHING_PRODUCTS });
    axios.get('get all products <- replaced with API endpoint')
    .then(response => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.response.message })
    })
  }
};