import React from 'react';
import withStyle from './withStyle';
import { Menu, MenuItem } from '../Menu';
import SearchInput from '../../molecules/SreachInput/SearchInput';
import MenuContent from '../../molecules/MenuContent/MenuContent';
import menuContent from '../../../shared/mock/menuContent';
import Link from '../../atoms/Link/Link';
import SearchNSuggestion from "../SearchNSuggestion/SearchNSuggestion";


const Header = ({ className }) => (
  <div className={`${className}`}>
    <Link to="/filmify">
      <img src="/logo.svg" alt="logo" />
    </Link>
    <Menu className="header__menu">
      <MenuItem title="Menu">
        <MenuContent data={menuContent} />
      </MenuItem>
    </Menu>
    <div className="Header__search">
      <SearchNSuggestion />
    </div>
    <Menu className="header__menu">
      <MenuItem title="IMDBPro" />
      <MenuItem title="Watchlist" />
      <MenuItem title="Menu" />
    </Menu>
  </div>
);


export default withStyle(Header);
