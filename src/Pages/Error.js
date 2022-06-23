import React from 'react';
import './Error.css'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <h2>Error 404</h2>
      <h3>Page not found</h3>
      <Link to='/'>Back to home</Link>
    </div>
  );
}

export default Error;
