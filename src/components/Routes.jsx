import React from 'react';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

export default () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch>
          <Route path="/filmify" exact component={Home} />
          <Route path="/filmify/movie-details/:id" component={MovieDetails} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
