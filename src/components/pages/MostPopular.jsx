import React from 'react';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import useQueryParams from '../../shared/hooks/useQueryParams';

const MostPopular = (props) => {
  const { page = 1 } = useQueryParams();
  const { data, loading, error } = useFetcher({ url: '/movie/popular', queryString: { page } });
  console.log(data, loading, error);
  return (
    <Page {...props} title="Most Popular Movies - IMDb">
            Showtimes and Cinemas tickets
    </Page>
  );
};

export default MostPopular;
