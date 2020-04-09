import React from 'react';
import Link from '../../atoms/Link/Link';
import withStyle from './withStyle';
import Chip from '../../atoms/Chip/Chip';


const ShowDetails = ({ className, show }) => (
  <div className={`${className}`}>
    <div className="movie__heading" />
    <div className="movie__description">
      <div className="movie__poster">
        <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt="movie poster" />
        <div className="movie__genres">
          {show.genres.map(({ name }, index) => <Chip key={index.toString()}>{name}</Chip>)}
        </div>
      </div>
      <div className="movie__description__content">
        <Link href={show.homepage}>
          <div className="movie__title">
            <h1>{show.name}</h1>
            <span className="movie__vote">{show.vote_average}</span>/10
            <h4>{show.tagline}</h4>
            <Chip>{show.status}</Chip> <span className="movie__release">{show.release_date}</span>
          </div>
        </Link>
        <div className="movie__overview">
          <p>{show.overview}</p>
        </div>
      </div>
    </div>
  </div>
);


export default withStyle(ShowDetails);
