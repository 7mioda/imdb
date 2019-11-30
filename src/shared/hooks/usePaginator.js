import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const usePaginator = (count, nbrPerPage) => {

  const pageCount = Math.round(count / nbrPerPage);
  const history = useHistory();
  const { location: { pathname } } = history;
  const pages = new Array(pageCount).fill(1);
  const [sliceIndex, setSliceIndex] = useState(0);
  const setNextPage = (toPage) => {
    if ((toPage <= pageCount) && (toPage > 0)) {
      history.push(`${pathname}?page=${toPage}`);
    }
  };
  const getNextSlice = () => setSliceIndex((currentSliceIndex) => currentSliceIndex + 10);
  const getPreviousSlice = () => setSliceIndex((currentSliceIndex) => currentSliceIndex - 10);
  return ({
    getPreviousSlice,
    setNextPage,
    pageCount,
    pages: pages.slice(sliceIndex, sliceIndex + 10),
    sliceIndex,
    getNextSlice,
  });
};

export default usePaginator;
