import React from 'react';
import { get } from 'lodash';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import useQueryParams from '../../shared/hooks/useQueryParams';
import Paginator from '../molecules/Paginator/Paginator';
import Card from '../molecules/Card/Card';

const MostPopular = (props) => {
  const query = useQueryParams(props);
  const page = query.get('page');
  const { data } = useFetcher({ url: '/movie/popular', queryString: { page } });
  return (
    <Page {...props} title="Most Popular Movies - IMDb">
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

export default MostPopular;
