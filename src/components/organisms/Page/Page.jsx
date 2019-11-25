import React, { useEffect } from 'react';
import withStyle from './withStyle';

const Page = ({ className, title }) => {
  useEffect(() => {
    document.title = title;
    return () => { document.title = 'loading'; };
  }, [title]);
  return (
    <div className={`${className}`}>
            Movie
    </div>
  );
};

export default withStyle(Page);
