import React from 'react';
import withStyle from './withStyle';

const SearchIcon = ({ className }) => (
  <span role="img" aria-label="search icon" className={`${className}`} />
);

export default withStyle(SearchIcon);
