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
  const { data } = useFetcher({ url: '/tv/popular', queryString: { page } });
  return (
    <Page title="IMDb Top 250 - IMDb">
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', maxWidth: 1470,
        }}
      >
        {get(data, 'results', []).map((show, index) => <Card key={index.toString()} show={show} />)}
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
