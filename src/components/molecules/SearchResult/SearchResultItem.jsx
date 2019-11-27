import React from 'react';
import withStyle from './withStyle';


const SearchResultItem = ({
  className, data: { title, release_date: releaseDate, backdrop_path: backdropPath, poster_path },
}) => (
  <div className={`${className}`}>
    <div className="search-item__img">
      <img style={{ width: 50, height: 70 }} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
    </div>
    <div className="search-item__content">
      <h3>{title}</h3>
      <h4>{releaseDate && new Date(releaseDate).getFullYear()}</h4>
    </div>
  </div>
);

export default withStyle(SearchResultItem);
