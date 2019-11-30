import React from 'react';
import { get } from 'lodash';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import Paginator from '../molecules/Paginator/Paginator';
import useQueryParams from '../../shared/hooks/useQueryParams';
import Card from '../molecules/Card/Card';

export default (props) => {
  const query = useQueryParams(props);
  const page = query.get('page');
  const { data } = useFetcher({ url: '/movie/top_rated', queryString: { page } });
  return (
    <Page title="IMDb Rop 250 - IMDb">
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', maxWidth: 1470,
        }}
      >
        {get(data, 'results', []).map((movie, index) => <Card key={index.toString()} movie={movie} />)}
      </div>
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', margin: '25px',
        }}
      >
        { data && <Paginator count={get(data, 'total_results', 1)} nbrPerPage={20} activePage={page} />}
      </div>
    </Page>
  );
};
