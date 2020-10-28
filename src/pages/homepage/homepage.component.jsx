import React, { useState, useEffect } from 'react';


import { auth } from '../../utils/auth';
// import BlogsPreview from '../../components/BlogsPreview/blogs-preview.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='home-page'>
    <div className='welcome-content'>
      <h1>Welcome</h1>
      <p>
        Welcome to 'A Uniquely Inspired Life'! We are a unique online retail store that offers lifestyle, home decor and garden products. 
        <br />
        Our mission is to create an online experience where our guests feel welcome to come in and discover unique and sophisticated items that will inspire their lives.
        <br />
        We offer free shipping on any U.S. order over $100.
      </p>
    </div>
    {/* <BlogsPreview /> */}
  </div>
);

export default HomePage;
