import axios from 'axios';

// BLOGS
export const FETCHING_BLOGS = 'FETCHING_BLOGS';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_ERROR = 'FETCH_BLOGS_ERROR';

// PRODUCTS
export const FETCHING_PRDUCTS = 'FETCHING_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';


export const fetchBlogs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_BLOGS });
    axios.get('get all blogs <- replaced with API endpoint')
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