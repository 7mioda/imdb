import React from 'react';
import Link from '../../atoms/Link/Link';
import withStyle from './withStyle';
import Chip from "../../atoms/Chip/Chip";


const MovieDetails = ({ className, movie }) => console.log(movie) || (
  <div className={`${className}`}>
    <div className="movie__heading" />
    <div className="movie__description">
      <div className="movie__poster">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />
        <div className="movie__genres">
          {movie.genres.map(({ name }, index) => <Chip key={index.toString()}>{name}</Chip>)}
        </div>
      </div>
      <div className="movie__description__content">
        <Link href={movie.homepage}>
          <div className="movie__title">
            <h1>{movie.title}</h1>
            <span className="movie__vote">{movie.vote_average}</span>/10
            <h4>{movie.tagline}</h4>
            <Chip>{movie.status}</Chip> <span className="movie__release">{movie.release_date}</span>
          </div>
        </Link>
        <div className="movie__overview">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  </div>
);


export default withStyle(MovieDetails);
