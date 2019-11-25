import React, { useContext } from 'react';
import * as PropTypes from 'prop-types';
import withStyle from './withStyle';
import { MenuContext } from '../../organisms/Menu/Menu';
import Link from '../../atoms/Link/Link';

const MenuItem = ({
  className, title, type, children, to, ...rest
}) => {
  const context = useContext(MenuContext);
  const { activeItem, setActiveItem } = context;
  const setActiveMenuItem = () => {
    setActiveItem(title === activeItem ? 'none' : title);
  };
  return (
    <div className={className} {...rest}>
      { type === 'link'
        ? (
          <Link
            to={to}
            classNames={['menu-item__title']}
            onClick={setActiveMenuItem}
          >
            {title}
          </Link>
        )
        : (
          <button
            className="menu-item__title"
            type="button"
            onClick={setActiveMenuItem}
          >
            {title}
          </button>
        )
      }
      {context.activeItem === title && children && (
        <div className="menu-item__dropdown">{children}</div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.object,
};

MenuItem.defaultProps = {
  content: undefined,
};

export default withStyle(MenuItem);
