import React, { useEffect, memo } from 'react';

import withStyle from './withStyle';

const Page = ({ className, children, title }) => {
  useEffect(() => {
    document.title = title;
    return () => { document.title = 'loading'; };
  }, [title]);

  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default memo(withStyle(Page));
