import React from 'react';
// import styled from 'styled-components';


export default function Blog (props) {
  const {title, post, postDate} = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{postDate}</p>
      <p>{post}</p>
    </div>
  );
};