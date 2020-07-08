import React, {useState, useEffect} from 'react';
import './Home.css';
// import styled from 'styled-components';

import {auth} from '../utils/auth.js';
import Header from './Header';
import Footer from './Footer';
import Blog from './BlogPreview';

// const BlogContainer = styled.div`
//   max-width: 100%;
//   background-color: lightpink;
//   padding: 4% 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 800px;
// `;

function Home() {
  const [blog, setBlog] = useState([]);


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
      
    auth()
    .get('http://localhost:8080/api/blogs', {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setBlog(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);
  
  // This functions purpose serves to provide a route to Blog
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   // TODO - 
  //   console.log("inside handleclick");
  // }

  return (
    <>
    <Header />
    <div className="BlogContainer">
      {
        blog.map((entry) => {
          return(
            <Blog 
              key={entry.id}
              title={entry.heading} 
              post={entry.content}
              postDate={entry.postDate}
            />
          )
        })
      }
    </div>
    <Footer />
    </>
  );
}

export default Home;