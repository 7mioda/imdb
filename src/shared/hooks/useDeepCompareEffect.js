import { useEffect } from 'react';
import useDeepCompareMemoize from './useDeepCompareMemoize';

const useDeepCompareEffect = (callback, dependencies) => {
  useEffect(callback, useDeepCompareMemoize(dependencies));
};


export default useDeepCompareEffect;
