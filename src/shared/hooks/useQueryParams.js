import { useLocation } from 'react-router-dom';
import { parse } from 'querystring';


const useQueryParams = () => {
  const { search } = useLocation();
  return parse(search.slice(1));
};


export default useQueryParams;
