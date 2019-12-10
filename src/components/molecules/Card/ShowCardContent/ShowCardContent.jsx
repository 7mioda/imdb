import React from 'react';


const ShowCardContent = ({ show }) => {
  const {
    name, vote_average: voteAverage, overview,
  } = show;

  return (
    <div>
      <div className="card__content__head">
        <a href="#">
          <h3 className="card__content__title">{name}</h3>
        </a>
        <div className="card__content__ratings"><span>{voteAverage}</span>/10</div>
      </div>
      <div className="card__info">
        <div className="movie-running-timessss">
          <span>{overview.slice(0, 100)}...</span>
        </div>
      </div>
    </div>
  );
};


export default ShowCardContent;
