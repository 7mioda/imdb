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
import useOnRouterChange from '../shared/hooks/useOnRouterChange';

export default () => {
  useOnRouterChange(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
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
