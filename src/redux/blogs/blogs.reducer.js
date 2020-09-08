import {FETCHING_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_ERROR} from '../actions/actions';

// Blog Redux Initial State
export const initBlogState = {
  blog_id: null,
  heading: '',
  date: '',
  content: '',
  loading: false,
  error: ''
};

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