import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { showId } = useParams();
  console.log(showId);
  const { data, loading, error } = useFetcher({ url: `/tv/${showId}` });
  console.log(data);
  return (
    <Page>
            Tv Show
    </Page>
  );
};
