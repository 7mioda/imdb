import React from 'react';
import withStyle from './withStyle';


const NotFound = ({ className }) => (
  <div className={`${className}`}>
    <h1>404 Not Found</h1>
  </div>
);

export default withStyle(NotFound);
