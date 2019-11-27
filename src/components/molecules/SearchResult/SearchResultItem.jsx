import React from 'react';
import withStyle from './withStyle';


const SearchResultItem = ({
  className, data: { title, release_date: releaseDate, backdrop_path: backdropPath },
}) => (
  <div className={`${className}`}>
    <div className="search-item__img">
      <img src={backdropPath} alt="" />
    </div>
    <div className="search-item__content">
      <h3>{title}</h3>
      <h4>{releaseDate}</h4>
    </div>
  </div>
);

export default withStyle(SearchResultItem);
