import React from 'react';
import { isEmpty, compact, isUndefined } from 'lodash';
import Link from '../../atoms/Link/Link';
import withStyle from './withStyle';


const getImg = (base, ...paths) => {
  if (isEmpty(compact(paths))) return undefined;
  return (`${base}${paths.find((e) => !isUndefined(e))}`);
};

const paths = {
  tv: '/tv-shows/show-details/',
  person: '/celebrity-details/',
  company: '/company-details/',
  keyword: '/keyword-details/',
  movie: '/movie-details/',
};

const resolvePath = (topic, type, id) => paths[topic] + id || paths[type] + id;

const SearchResultItem = ({
  topic,
  className, data: {
    id,
    title,
    name,
    media_type: type,
    release_date: releaseDate,
    poster_path: poster,
    logo_path: logo,
    profile_path: profile,
  },
}) => (
  <Link to={resolvePath(topic, type, id)}>
    <div className={`${className}`}>
      <div className="search-item__img">
        <img style={{ width: 50, height: 70 }} src={getImg('https://image.tmdb.org/t/p/w500/', poster, profile, logo) || '/default-search.jpeg'} alt="" />
      </div>
      <div className="search-item__content">
        <h3>{title || name}</h3>
        <h4>{releaseDate && new Date(releaseDate).getFullYear()}</h4>
      </div>
    </div>
  </Link>
);

export default withStyle(SearchResultItem);
