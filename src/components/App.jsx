import React from 'react';
import { ThemeProvider } from 'emotion-theming';
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
        <Routes />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
