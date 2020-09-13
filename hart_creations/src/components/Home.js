import React, {useState, useEffect} from 'react';
import './css/Home.css';

import {auth} from '../utils/auth.js';
import Header from './Header';
import Footer from './Footer';
import Blog from './Blog';
import {testOfflineBlogs as offlineBlogData} from '../utils/Home.data.js';

function Home() {
  const [blog, setBlog] = useState([]);
  const [offlineData, setOfflineData] = useState(offlineBlogData);

  // retrieve JSON Web Token to localstorage
  // fetch blogs from server
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
      // setOfflineData(offlineState)
    })
  }, []);
  

  return (
    <>
    <Header />
    <div className="BlogContainer">
      {
        // Display offline blog data when server is down
        // otherwise display blogs from server 
        blog.length > 0 ? 
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
        :
          offlineData.map((entry) => {
            return (
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