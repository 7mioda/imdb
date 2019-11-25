import React, { createContext, useState } from 'react';
import * as PropTypes from 'prop-types';
import withStyle from './withStyle';
import buildClassName from '../../../shared/utils/buildClassName';

export const MenuContext = createContext({
  activeItem: 'none',
  setActiveItem: () => undefined,
});

const Menu = (props) => {
  const [activeItem, setActiveItem] = useState(null);
  const { className, children } = props;
  const defaultClasses = ['left', 'right', 'center'];
  return (
    <div className={`${className} ${buildClassName(props, defaultClasses)}`}>
      <MenuContext.Provider value={{ activeItem, setActiveItem }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Menu);
