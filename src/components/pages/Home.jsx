import React from 'react';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { data, loading, error } = useFetcher({ url: '/movie/popular', queryString: { page: 1 }  });
  console.log(data, loading, error);
  return (
    <div>
            Home
    </div>
  );
};
