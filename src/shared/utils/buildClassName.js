import { get } from 'lodash';


const buildClassName = (props, defaultProps = []) => defaultProps
  .map((currentValue) => {
    if (get(props, currentValue, undefined) === true) {
      return currentValue;
    }
    return null;
  })
  .concat(get(props, 'classNames', []))
  .join(' ');


export default buildClassName;
