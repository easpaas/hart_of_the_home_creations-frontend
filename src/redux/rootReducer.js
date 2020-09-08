import {combineReducers} from 'redux';

import blogReducer from './blogs/blogs.reducer';
import productReducer from './products/products.reducer';
// import {blogReducer, productReducer} from './Reducer'

export default combineReducers({
  blogReducer,
  productReducer
})

