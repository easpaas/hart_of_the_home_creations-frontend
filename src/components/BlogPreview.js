import React from 'react';
import styled from 'styled-components';

const Preview = styled.div`
  width: 60%;
  border: 4px solid;
  margin: 2% auto;
  padding: 1%;
`;

export default function BlogPreview (props) {
  const {title, post, postDate} = props;
  return (
    <Preview>
      <h2>{title}</h2>
      <p>{postDate}</p>
      <p>
      {
        post.split(" ").splice(0,10).join(" ") + "..."
      }
      </p>
    </Preview>
  );
};