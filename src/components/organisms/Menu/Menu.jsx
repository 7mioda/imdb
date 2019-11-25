import React, { createContext, useState, useRef } from 'react';
import * as PropTypes from 'prop-types';
import withStyle from './withStyle';
import buildClassName from '../../../shared/utils/buildClassName';
import useOnClickOutside from '../../../shared/hooks/useOnClickOutside';

export const MenuContext = createContext({
  activeItem: 'none',
  setActiveItem: () => undefined,
});

const Menu = (props) => {
  const ref = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  useOnClickOutside(ref, () => setActiveItem('none'));
  const { className, children } = props;
  const defaultClasses = ['left', 'right', 'center'];
  return (
    <div ref={ref} className={`${className} ${buildClassName(props, defaultClasses)}`}>
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
