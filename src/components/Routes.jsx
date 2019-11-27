import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import TopRated from './pages/TopRated';
import Showtimes from './pages/Showtimes';
import MostPopular from './pages/MostPopular';
import NotFound from './pages/NotFound';

export default () => {
  return (
    <Switch>
      <Route path="/filmify" exact component={Home} />
      <Route path="/filmify/movie-details/:id" component={MovieDetails} />
      <Route path="/filmify/top" component={TopRated} />
      <Route path="/filmify/showtimes" component={Showtimes} />
      <Route path="/filmify/popular" component={MostPopular} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
