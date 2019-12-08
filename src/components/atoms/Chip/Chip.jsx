import React from 'react';
import withStyle from './withStyle';

const Chip = ({ className, children }) => (<span className={`${className}`}>{children}</span>);


export default withStyle(Chip);
