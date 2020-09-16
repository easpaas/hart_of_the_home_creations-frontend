import {combineReducers} from 'redux';

import {blogReducer} from './blogs/reducer.js';
import {productReducer} from './products/reducer.js';

export default combineReducers({
  blogReducer,
  productReducer
})

