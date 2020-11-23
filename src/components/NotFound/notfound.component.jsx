import React from 'react';

import './notfound.styles.scss';

const NotFound = () => (
  <div className='notfound'>
    This page doesn't exist yet ...
    <div style={{ fontWeight: '900', margin: '0 auto', fontSize: '1rem', color: 'black', cursor: 'pointer', padding: '2%' }} onClick={() => window.history.back()}>Return to previous page</div>
  </div>

);

export default NotFound;