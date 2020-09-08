import axios from 'axios';

import {FETCHING_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_ERROR, FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from "./actions.js";
import {auth} from '../utils/auth.js';


export const fetchBlogs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_BLOGS });
    auth()
      .get('http://localhost:8080/api/blogs')
      .then(response => {
        dispatch({ type: FETCH_BLOGS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_BLOGS_ERROR, payload: error.response.message })
      })
  }
};

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