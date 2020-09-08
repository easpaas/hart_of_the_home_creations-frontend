import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner'
import './css/Home.css';

import Header from './Header';
import Footer from './Footer';
import Blog from './Blog';
import { fetchBlogs, fetchProducts } from '../redux/actions/actionCreators.js';

function Home({fetchBlogs, fetchProducts}) {

  useEffect(() => {
    fetchBlogs();
    fetchProducts();
  }, [fetchBlogs, fetchProducts]);
  

  return (
    <>
    <Header />
    <div className="BlogPreviewContainer">
      {
        // If data fetching is loading
        // display loader spinner
        loading &&
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //5 secs
          />
        // TODO - add a blog preview 
        
      }
    </div>
    <Footer />
    </>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps, { fetchBlogs, fetchProducts })(Home)
