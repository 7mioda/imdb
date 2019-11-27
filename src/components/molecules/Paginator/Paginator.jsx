import React from 'react';
import usePaginator from '../../../shared/hooks/usePaginator';
import withStyle from './withStyle';


const Paginator = ({
  className, count, nbrPerPage, activePage,
}) => {
  const {
    getPreviousSlice, getNextSlice,
    setNextPage, pages, sliceIndex,
  } = usePaginator(count, nbrPerPage);
  console.log(sliceIndex);
  return (
    <div className={`${className}`}>
      { (sliceIndex > 0) && (<button type="button" onClick={() => getPreviousSlice()}> {'<<'} </button>)}
      {pages.map((elem, index) => (
        <button
          key={index.toString()}
          type="button"
          className={`${parseFloat(activePage) === (index + 1 + sliceIndex) ? 'active' : ''}`}
          onClick={() => setNextPage(index + 1 + sliceIndex)}
        >{index + 1 + sliceIndex}
        </button>
      ))}
      { (sliceIndex + 10 < count) && <button type="button" onClick={() => getNextSlice()}> >> </button>}
    </div>
  );
};


export default withStyle(Paginator);
