import React from 'react';
import useFetcher from '../../shared/hooks/useFetcher';
import Page from '../organisms/Page/Page';

export default () => {
  const { data, loading, error } = useFetcher({ url: '/movie/popular', queryString: { page: 1 } });
  console.log(data, loading, error);
  return (
    <Page title="IMDb">
        Home
    </Page>
  );
};
