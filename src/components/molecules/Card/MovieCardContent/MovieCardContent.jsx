import React from 'react';


const MovieCardContent = ({ movie }) => {
  const {
    title, runtime, vote_average: voteAverage, release_date: releaseDate,
  } = movie;
  return (
    <div>
      <div className="card__content__head">
        <a href="#">
          <h3 className="card__content__title">{title}</h3>
        </a>
        <div className="card__content__ratings"><span>{voteAverage}</span>/10</div>
      </div>
      <div className="card__info">
        <div className="movie-running-time">
          <label>Release date</label>
          <span>{releaseDate}</span>
        </div>
        <div className="movie-running-time">
          <label>Running time</label>
          <span>{runtime}</span>
        </div>
      </div>
    </div>
  );
};


export default MovieCardContent;
