import React from 'react';
import withStyle from './withStyle';


const Card = ({ className, movie }) => (
  <div className={`${className}`}>
    <div className="card__header">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
    </div>
    <div className="card__content">
      <div className="card__content__head">
        <a href="#">
          <h3 className="card__content__title">{movie.title}</h3>
        </a>
        <div className="card__content__ratings"><span>{movie.vote_average}</span>/10</div>
      </div>
      <div className="card__info">
        <div className="movie-running-time">
          <label>Release date</label>
          <span>{movie.release_date}</span>
        </div>
        <div className="movie-running-time">
          <label>Running time</label>
          <span>2hr 33min</span>
        </div>
      </div>
    </div>
  </div>
);


export default withStyle(Card);