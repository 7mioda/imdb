import { useHistory } from 'react-router-dom';

const usePaginator = (count, nbrPerPage) => {
  const pageCount = count / nbrPerPage;
  const history = useHistory();
  const { location: { pathname } } = history;
  const setNextPage = (toPage) => {
    if ((toPage <= pageCount) && (toPage > 0)) {
      history.push(`${pathname}?=page${toPage}`);
    }
  };
  return ({ setNextPage, pageCount });
};

export default usePaginator;
