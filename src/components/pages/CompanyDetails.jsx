import React from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { companyId } = useParams();
  console.log(companyId);
  const { data } = useFetcher({ url: `/company/${companyId}` });
  console.log(data);
  const name = get(data, 'name', 'Celebrity');
  return (
    <Page title={`${name} - IMDb`}>
            Company
    </Page>
  );
};
