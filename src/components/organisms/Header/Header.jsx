import React, { useContext } from 'react';
import withStyle from './withStyle';
import { Menu, MenuItem } from '../Menu';
import MenuContent from '../../molecules/MenuContent/MenuContent';
import menuContent from '../../../shared/mock/menuContent';
import Link from '../../atoms/Link/Link';
import SearchNSuggestion from '../SearchNSuggestion/SearchNSuggestion';
import { UiContext } from '../../App';


const Header = ({ className }) => {
  const { uiState: { drawer }, setUiState } = useContext(UiContext);
  return (
    <div className={`${className}`}>
      <div className="menu">
        <button
          type="button"
          className="header__drawer__btn"
          onClick={() => setUiState({
            drawer: !drawer,
            drawerContent: (<MenuContent data={menuContent} />),
          })}
        />
        <Link to="/" className="test">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <Menu className="header__menu">
          <MenuItem title="Menu">
            <MenuContent data={menuContent} />
          </MenuItem>
        </Menu>
        <div className="header__search">
          <SearchNSuggestion />
        </div>
        <Menu className="header__menu">
          <MenuItem title="IMDBPro" />
          <MenuItem title="Watchlist" />
          <MenuItem title="User" />
        </Menu>
      </div>
    </div>
  );
};


export default withStyle(Header);
