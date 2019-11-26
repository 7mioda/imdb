import { useRef } from 'react';
import { isEqual } from 'lodash';


const useDeepCompareMemoize = (value) => {
  const ref = useRef();
  // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};


export default useDeepCompareMemoize;
