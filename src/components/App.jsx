import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Link } from 'react-router-dom';
import { Global } from '@emotion/core';
import { restCss, getTheme } from '../theme';
import AppWrapper from './AppWrapper';
import useTheme from '../shared/hooks/useTheme';
import Routes from './Routes';


function App() {
  const [prefersColorScheme, toggleColorScheme] = useTheme('light');
  return (
    <ThemeProvider theme={getTheme(prefersColorScheme)}>
      <Global styles={restCss} />
      <AppWrapper>
        <button className="scheme-pref-btn" type="button" onClick={toggleColorScheme}> {prefersColorScheme} </button>

        <BrowserRouter>
          <Link to="/filmify"> home</Link>
          <Link to="/filmify/movie-details/1">movie</Link>

          <Routes />
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
