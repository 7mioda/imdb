import { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import axios from 'axios';
import { stringify } from 'querystring';

const { done, start } = NProgress;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const { REACT_APP_API_V3_KEY } = process.env;
const useFetcher = ({
  url, method = 'get', queryString = {}, data = {},
}) => {
  const [state, setState] = useState({ data: null, error: null, loading: true });

  useEffect(() => {
    const source = axios.CancelToken.source();
    start();
    (async () => {
      try {
        const { data: response } = await instance({
          method, url: `${url}?${stringify({ api_key: REACT_APP_API_V3_KEY, ...queryString })}`, cancelToken: source.token, data,
        });
        setState(setState({ ...state, data: response, loading: false }));
        done();
      } catch (error) {
        setState(setState({ ...state, error, loading: false }));
        done();
      }
    })();
    return () => source.cancel('Operation canceled by the user.');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ({ ...state });
};

export default useFetcher;
