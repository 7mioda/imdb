import React from 'react';
import { NavLink } from 'react-router-dom';
import withStyle from './withStyle';


const Link = (props) => {
  const {
    to, className, classNames, ...rest
  } = props;
  return to ? <NavLink to={to} className={`${className} ${classNames.join(' ')}`} {...rest} />
  // eslint-disable-next-line jsx-a11y/anchor-has-content
    : <a className={`${className} ${classNames.join(' ')}`} href={rest.href} {...rest} />;
};

Link.defaultProps = {
  classNames: [],
};


export default withStyle(Link);
