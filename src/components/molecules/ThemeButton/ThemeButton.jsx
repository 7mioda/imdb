import React from 'react';
import withStyle from './withStyle';


const ThemeButton = ({ className, onClick }) => (
  <div className={className}>
    <input className="tgl tgl-light" id="cb1" type="checkbox" />
    <label className="tgl-btn" htmlFor="cb1" onClick={() => onClick()} />
  </div>

);

export default withStyle(ThemeButton);
