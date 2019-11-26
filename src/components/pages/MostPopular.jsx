import React from 'react';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import useQueryParams from '../../shared/hooks/useQueryParams';
import Paginator from '../Paginator/Paginator';

const MostPopular = (props) => {
  const query = useQueryParams(props);
  const { data, loading, error } = useFetcher({ url: '/movie/popular', queryString: { page: query.get('page') } });
  console.log('fetcg', data, loading, error);
  return (
    <Page {...props} title="Most Popular Movies - IMDb">
            Showtimes and Cinemas tickets { data && data.page}
      <Paginator count={1000} nbrPerPage={20} />
    </Page>
  );
};

export default MostPopular;
