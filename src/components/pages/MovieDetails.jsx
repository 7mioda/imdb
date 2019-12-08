import React from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import MovieDetails from '../organisms/MovieDetails/MovieDetails';

export default () => {
  const { movieId } = useParams();
  const { data } = useFetcher({ url: `/movie/${movieId}` });
  console.log(data);
  const name = get(data, 'title', 'Movie Details');
  return (
    <Page title={`${name} - IMDb`}>
      { data && <MovieDetails movie={data} />}
    </Page>
  );
};
