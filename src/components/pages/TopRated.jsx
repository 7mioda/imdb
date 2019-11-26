import React from 'react';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import Paginator from '../Paginator/Paginator';
import useQueryParams from '../../shared/hooks/useQueryParams';

export default (props) => {
  const query = useQueryParams(props);
  const { data, loading, error } = useFetcher({ url: '/movie/top_rated', queryString: { page: query.get('page') } });
  console.log(data, loading, error);
  return (
    <Page title="IMDb Rop 250 - IMDb">
            Movie
      <Paginator count={1000} nbrPerPage={20} />
    </Page>
  );
};
