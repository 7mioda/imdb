import React from 'react';
import withStyle from './withStyle';
import Link from '../../atoms/Link';
import MovieCardContent from './MovieCardContent';
import ShowCardContent from './ShowCardContent';


const Card = ({ className, movie, show }) => {
  const { id, poster_path: posterPath } = movie || show;
  const link = `${movie ? 'movie-details' : 'show-details'}/${id}`;
  return (
    <Link to={link}>
      <div className={`${className}`}>
        <div className="card__header">
          <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="" />
        </div>
        <div className="card__content">
          {movie && <MovieCardContent movie={movie} />}
          {show && <ShowCardContent show={show} />}
        </div>
      </div>
    </Link>
  );
};


export default withStyle(Card);
