import React from 'react';
import './css/Blog.css';


export default function Blog (props) {
  const {title, post, postDate} = props;
  return (
    <div className="Preview">
      
      {/* Blog Title and Date */}
      <div className="BlogContainer">
        <h2 style={{margin: '0'}}>{title}</h2>
        <p>Posted: {postDate}</p>
      </div>

      {/* Add horizontal line with <hr> tag */}
      <hr/>

      {/* Blog Post */}
      <div className="BlogContent">{post}</div>
    
    </div>
  );
};