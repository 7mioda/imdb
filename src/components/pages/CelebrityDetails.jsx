import React from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { celebrityId } = useParams();
  console.log(celebrityId);
  const { data } = useFetcher({ url: `/person/${celebrityId}` });
  console.log(data);
  const name = get(data, 'name', 'Celebrity');
  return (
    <Page title={`${name} - IMDb`}>
        Person
    </Page>
  );
};
