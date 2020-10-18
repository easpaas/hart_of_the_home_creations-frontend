import React, { useState, useEffect } from 'react';

import { auth } from '../../utils/auth';
import BlogsPreview from '../../components/BlogsPreview/blogs-preview.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='home-page'>
    <BlogsPreview />
  </div>
);

export default HomePage;
