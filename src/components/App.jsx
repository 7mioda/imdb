import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/core';
import { restCss, getTheme } from '../theme';
import AppWrapper from './AppWrapper';
import useTheme from '../shared/hooks/useTheme';
import Routes from './Routes';
import Header from './organisms/Header';


function App() {
  const [prefersColorScheme, toggleColorScheme] = useTheme('light');
  return (
    <ThemeProvider theme={getTheme(prefersColorScheme)}>
      <Global styles={restCss} />
      <AppWrapper>
        <button className="scheme-pref-btn" type="button" onClick={toggleColorScheme}> {prefersColorScheme} </button>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
