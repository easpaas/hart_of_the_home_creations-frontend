import React from 'react';

import './notfound.styles.scss';

const NotFound = () => (
  <div className='notfound'>
    <h1>Blogs Feature...Coming Soon</h1>
    <button onClick={() => window.history.back()}>Return to previous page</button>
  </div>

);

export default NotFound;