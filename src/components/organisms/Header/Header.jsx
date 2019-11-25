import React from 'react';
import withStyle from './withStyle';
import { Menu, MenuItem } from '../Menu';
import SearchInput from '../../molecules/SreachInput/SearchInput';
import MenuContent from '../../molecules/MenuContent/MenuContent';
import menuContent from '../../../shared/mock/menuContent';


const Header = ({ className }) => (
  <div className={`${className}`}>
    <img src="/logo.svg" alt="logo" />
    <Menu className="header__menu">
      <MenuItem title="Menu">
        <MenuContent data={menuContent} />
      </MenuItem>
    </Menu>
    <div className="Header__search">
      <SearchInput />
    </div>
  </div>
);


export default withStyle(Header);
