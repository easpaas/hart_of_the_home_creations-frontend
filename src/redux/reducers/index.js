import {combineReducers} from 'redux';
import {blogReducer, productReducer} from './Reducer'

export default combineReducers({
  blogReducer,
  productReducer
})