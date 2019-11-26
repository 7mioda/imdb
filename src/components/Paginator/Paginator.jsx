import React from 'react';
import usePaginator from '../../shared/hooks/usePaginator';


const Paginator = ({ className, count, nbrPerPage }) => {
  const { setNextPage, pageCount } = usePaginator(count, nbrPerPage);
  return (
    <div>
      {new Array(pageCount).fill(50).map((elem, index) => (<button type="button" onClick={() => setNextPage(index)}>{index}</button>))}
    </div>
  );
};


export default Paginator;
