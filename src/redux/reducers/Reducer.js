// Import Actions
import {FETCHING_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_ERROR, FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/actions';


// Blog Redux Initial State
export const initBlogState = {
  // TODO - add blog state
};

// Product Redux Initial State
export const initProductState = {
  // TODO - add product state
};


// Reducers
export const blogReducer = (state = initBlogState, action) => {
  switch(action.type) {
    case FETCHING_BLOGS: 
      return {
        ...state, 
      }
    case FETCH_BLOGS_SUCCESS: 
      return {
        ...state, 
      }
      case FETCH_BLOGS_ERROR: 
      return {
        ...state, 
        error: action.payload
      }
    default:
      return state;
  }
};

export const productReucer = (state = initProductState, action) => {
  switch(action.type) {
    case FETCHING_PRODUCTS: 
      return {
        ...state, 
      }
    case FETCH_PRODUCTS_SUCCESS: 
      return {
        ...state, 
      }
      case FETCH_PRODUCTS_ERROR: 
      return {
        ...state, 
        error: action.payload
      }
    default:
      return state;
  }
};

