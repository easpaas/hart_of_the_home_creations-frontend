import React, {useState} from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Blog from './Blog';

const BlogContainer = styled.div`
  max-width: 100%;
  background-color: lightpink;
  padding: 4% 0;
`;

const initBlogState = [
  {
    id: 3, 
    title: "My Third Blog post", 
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postDate: "2020-06-29"
  },
  {
    id: 1, 
    title: "My First Blog post", 
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postDate: "2020-06-27"
  },
  {
    id: 2, 
    title: "My Second Blog post", 
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postDate: "2020-06-28"
  }
]


function Home() {
  const [blog, setBlog] = useState(initBlogState);

  return (
    <>
    <Header />
    <BlogContainer>
      {
        blog.map((entry) => {
          return(
            <Blog 
              title={entry.title} 
              post={entry.post}
              postDate={entry.postDate}
            />
          )
        })
      }
    </BlogContainer>
    <Footer />
    </>
  );
}

export default Home;