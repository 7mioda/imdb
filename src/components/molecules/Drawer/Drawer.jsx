import React, { useRef, useContext } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import withStyle from './withStyle';
import { UiContext } from '../../App';
import useDeepCompareEffect from '../../../shared/hooks/useDeepCompareEffect';


const Drawer = ({ className, children }) => {
  const ref = useRef(null);
  const { uiState: { drawer }, setUiState } = useContext(UiContext);

  useDeepCompareEffect(() => {
    if (ref.current && drawer) {
      disableBodyScroll(ref.current);
    }
    return () => enableBodyScroll(ref.current);
  }, [ref, drawer]);
  return (
    <div ref={ref} className={`${className}`}>
      <div className={`drawer ${drawer ? 'active' : ''}`}>
        <button
          type="button"
          className="drawer__btn"
          onClick={() => setUiState({ drawer: false })}
        />
        {children}
      </div>
    </div>
  );
};

export default withStyle(Drawer);
