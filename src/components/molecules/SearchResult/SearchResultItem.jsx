import React from 'react';
import { isEmpty, compact, isUndefined } from 'lodash';
import withStyle from './withStyle';


const getImg = (base, ...paths) => {
  if (isEmpty(compact(paths))) return undefined;
  return (`${base}${paths.find((e) => !isUndefined(e))}`);
};

const SearchResultItem = ({
  className, data: {
    title,
    name,
    release_date: releaseDate,
    poster_path: poster,
    logo_path: logo,
    profile_path: profile,
  },
}) => (
  <div className={`${className}`}>
    <div className="search-item__img">
      <img style={{ width: 50, height: 70 }} src={getImg('https://image.tmdb.org/t/p/w500/', poster, profile, logo) || '/default-search.jpeg'} alt="" />
    </div>
    <div className="search-item__content">
      <h3>{title || name}</h3>
      <h4>{releaseDate && new Date(releaseDate).getFullYear()}</h4>
    </div>
  </div>
);

export default withStyle(SearchResultItem);
