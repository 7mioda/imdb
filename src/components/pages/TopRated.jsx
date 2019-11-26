import React from 'react';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { data, loading, error } = useFetcher({ url: '/movie/top_rated', queryString: { page: 1 } });
  console.log(data, loading, error);
  return (
    <Page title="IMDb Rop 250 - IMDb">
            Movie
    </Page>
  );
};
