import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { movieId } = useParams();
  console.log(movieId);
  const { data } = useFetcher({ url: `/movie/${movieId}` });
  console.log(data);
  return (
    <Page>
            Movie
    </Page>
  );
};
