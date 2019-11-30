import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';

export default () => {
  const { keywordId } = useParams();
  console.log(keywordId);
  const { data } = useFetcher({ url: `/keyword/${keywordId}` });
  console.log(data);
  return (
    <Page>
            Keyword
    </Page>
  );
};
