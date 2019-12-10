import React, { createContext, useReducer } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/core';
import { restCss, getTheme } from '../theme';
import AppWrapper from './AppWrapper';
import useTheme from '../shared/hooks/useTheme';
import Routes from './Routes';
import Header from './organisms/Header';
import Drawer from './molecules/Drawer/Drawer';
import ThemeButton from './molecules/ThemeButton';


export const UiContext = createContext({
  drawer: false,
  drawerContent: null,
});

function App() {
  const [prefersColorScheme, toggleColorScheme] = useTheme('light');
  const [uiState, setUiState] = useReducer(
    (current, next) => ({ ...current, ...next }),
    { drawer: false, drawerContent: null }
  );
  return (
    <ThemeProvider theme={getTheme(prefersColorScheme)}>
      <Global styles={restCss} />
      <AppWrapper>
        <UiContext.Provider value={{ uiState, setUiState }}>
          <ThemeButton className="scheme-pref-btn" onClick={toggleColorScheme} />
          <BrowserRouter>
            <Drawer>
              {uiState.drawerContent}
            </Drawer>
            <Header />
            <Routes />
          </BrowserRouter>
        </UiContext.Provider>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
