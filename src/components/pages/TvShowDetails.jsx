import React from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import ShowDetails from '../organisms/ShowDetails/ShowDetails';


export default () => {
  const { showId } = useParams();
  const { data } = useFetcher({ url: `/tv/${showId}` });
  const name = get(data, 'title', 'Tv-Show Details');
  return (
    <Page title={`${name} - IMDb`}>
      { data && <ShowDetails show={data} />}
    </Page>
  );
};
