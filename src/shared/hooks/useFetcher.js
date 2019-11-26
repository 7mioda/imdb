import { useState } from 'react';
import NProgress from 'nprogress';
import axios from 'axios';
import { stringify } from 'querystring';
import useDeepCompareEffect from './useDeepCompareEffect';

const { done, start } = NProgress;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const { REACT_APP_API_V3_KEY } = process.env;
const useFetcher = ({
  url, method = 'get', queryString = {}, data = {},
}) => {
  const [state, setState] = useState({ data: null, error: null, loading: true });

  useDeepCompareEffect(() => {
    const source = axios.CancelToken.source();
    start();
    (async () => {
      try {
        const { data: response } = await instance({
          method, url: `${url}?${stringify({ api_key: REACT_APP_API_V3_KEY, ...queryString })}`, cancelToken: source.token, data,
        });
        setState((currentState) => ({ ...currentState, data: response, loading: false }));
        done();
      } catch (error) {
        setState((currentState) => ({ ...currentState, error, loading: false }));
        done();
      }
    })();
    return () => source.cancel('Operation canceled by the user.');
  }, [queryString]);

  return ({ ...state });
};

export default useFetcher;
