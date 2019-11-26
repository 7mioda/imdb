import React from 'react';
import { get } from 'lodash';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import usePaginator from '../../shared/hooks/usePaginator';
import useQueryParams from '../../shared/hooks/useQueryParams';

const MostPopular = (props) => {
  const query = useQueryParams(props);
  console.log(query.get('page'));
  const { data, loading, error } = useFetcher({ url: '/movie/popular', queryString: { page: query.get('page') } });
  const { pageCount, setNextPage } = usePaginator(get(data, 'total_results', 1000), 20);

  console.log(data, loading, error);
  return (
    <Page {...props} title="Most Popular Movies - IMDb">
            Showtimes and Cinemas tickets
      <button type="button" onClick={() => setNextPage(5)}>next</button>
    </Page>
  );
};

export default MostPopular;
