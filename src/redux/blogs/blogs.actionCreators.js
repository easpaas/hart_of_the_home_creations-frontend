import axios from 'axios';
import {auth} from './../utils/auth';
import {FETCHING_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_ERROR} from "./actions.js";


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