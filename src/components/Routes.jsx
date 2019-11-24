import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/filmify" exact component={Home} />
    </Switch>
  </BrowserRouter>
);
