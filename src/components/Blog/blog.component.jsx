import React from 'react';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function Blog (props) {
  const {title, post, postDate} = props;

  return (
    <div className="blog">
      <div className="blog-header">
        <h1>{title}</h1>
        <div className="date-icons">
          <p>Posted: {postDate}</p>
          {/* <div className="material-icons">
            <Fab size="small" aria-label="share">
              <ShareIcon />
            </Fab>
            <Fab size="small" aria-label="like">
              <FavoriteIcon />
            </Fab>
          </div> */}
        </div>
      </div>

      <hr />

      <div className="blog-content">
        {post}
      </div>
    </div>
  );
};