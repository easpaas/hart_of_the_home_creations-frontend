// Import Actions
import {FETCHING_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_ERROR, FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/actions';


// Blog Redux Initial State
export const initBlogState = {
  blog_id: null,
  heading: '',
  date: '',
  content: '',
  loading: false,
  error: ''
};

// Product Redux Initial State
export const initProductState = {
  product_id: null,
  name: '',
  description: '',
  price: null,
  loading: false, 
  error: '',
};


// Reducers
export const blogReducer = (state = initBlogState, action) => {
  switch(action.type) {
    case FETCHING_BLOGS: 
      return {
        ...state, 
        loading: true,
      }
    case FETCH_BLOGS_SUCCESS: 
      return {
        // keep existing state
        ...state,
        // specifies state attributes to change
        blog_id: action.payload.blog_id,
        heading: action.payload.heading,
        date: action.payload.date,
        content: action.payload.content
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
        loading: true, 
      }
    case FETCH_PRODUCTS_SUCCESS: 
      return {
        ...state, 
        product_id: action.payload.product_id,
        name: action.payload.name, 
        description: action.payload.description,
        price: action.payload.price,
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

