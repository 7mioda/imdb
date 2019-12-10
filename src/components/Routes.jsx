import React, { useContext } from 'react';
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
import CompanyDetails from './pages/CompanyDetails';
import CelebrityDetails from './pages/CelebrityDetails';
import TvShowDetails from './pages/TvShowDetails';
import KeyWordDetails from './pages/KeyWordDetails';
import { UiContext } from './App';
import TopRatedTv from './pages/TopRatedTv';
import MostPopularTv from './pages/MostPopularTv';

export default () => {
  const { uiState: { drawer }, setUiState } = useContext(UiContext);
  useOnRouterChange(() => {
    if (drawer) {
      setUiState({ drawer: false });
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie-details/:movieId" component={MovieDetails} />
      <Route path="/company-details/:companyId" component={CompanyDetails} />
      <Route path="/celebrity-details/:celebrityId" component={CelebrityDetails} />
      <Route path="/tv-shows/show-details/:showId" component={TvShowDetails} />
      <Route path="/keyword-details/:keywordId" component={KeyWordDetails} />
      <Route path="/top" component={TopRated} />
      <Route path="/showtimes" component={Showtimes} />
      <Route path="/popular" component={MostPopular} />
      <Route path="/tv-shows/top" component={TopRatedTv} />
      <Route path="/tv-shows/popular" component={MostPopularTv} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
