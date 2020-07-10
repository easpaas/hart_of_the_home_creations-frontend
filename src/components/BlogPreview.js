import React from 'react';
import styled from 'styled-components';

const Preview = styled.div`
  padding: 1%;
  margin: 2%;
`;

export default function BlogPreview (props) {
  const {title, post, postDate} = props;
  return (
    <Preview>
      <div style={{textAlign: "left", marginLeft: "4%"}}>
        <h2 style={{margin: '0'}}>{title}</h2>
        <p>Posted: {postDate}</p>
      </div>
      <hr style={{ width: "90%", height: "2px", color: "black", backgroundColor: "black", margin: "1% auto" }}/>
      <div style={{width: '60%', textAlign: "left", lineHeight: "150%", margin: '2% auto'}}>{post}</div>
    </Preview>
  );
};