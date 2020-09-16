import {FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from './actions';

// Product Redux Initial State
export const initProductState = {
  product_id: null,
  name: '',
  description: '',
  price: null,
  loading: false, 
  error: '',
};

export const productReducer = (state = initProductState, action) => {
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

export default productReducer;
