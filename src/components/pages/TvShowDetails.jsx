import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../organisms/Page/Page';
import useFetcher from '../../shared/hooks/useFetcher';
import {get} from "lodash";

export default () => {
  const { showId } = useParams();
  console.log(showId);
  const { data } = useFetcher({ url: `/tv/${showId}` });
  console.log(data);
  const name = get(data, 'name', 'Celebrity');
  return (
    <Page title={`${name} - IMDb`}>
            Tv Show
    </Page>
  );
};
