import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { celebrityId } = useParams();
  console.log(celebrityId);
  const { data } = useFetcher({ url: `/person/${celebrityId}` });
  console.log(data);
  return (
    <Page>
        Person
    </Page>
  );
};
