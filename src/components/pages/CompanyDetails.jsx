import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { companyId } = useParams();
  console.log(companyId);
  const { data, loading, error } = useFetcher({ url: `/company/${companyId}` });
  console.log(data);
  return (
    <Page>
            Company
    </Page>
  );
};
