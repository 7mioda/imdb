import React from 'react';
import * as PropTypes from 'prop-types';
import withStyle from './withStyle';
import buildClassName from '../../../shared/utils/buildClassName';

const Input = (props) => {
  const {
    className, Prefix, Suffix, ...rest
  } = props;
  const defaultClasses = ['rounded', 'highlighted'];
  return (
    <div className={`${className} ${buildClassName(props, defaultClasses)}`}>
      {Prefix && (
        <div className="prefix">
          <Prefix.type {...Prefix.props} />
        </div>
      )}
      <input type="text" {...rest} />
      {Suffix && (
        <div className="suffix">
          <Suffix.type {...Suffix.props} />
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  Prefix: PropTypes.element,
  Suffix: PropTypes.element,
  classNames: PropTypes.array,
};

Input.defaultProps = {
  Prefix: undefined,
  Suffix: undefined,
  classNames: [],
};

export default withStyle(Input);
