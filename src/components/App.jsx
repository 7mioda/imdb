import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { restCss, getTheme } from '../theme';
import AppWrapper from './AppWrapper';


function App() {
  const [prefersColorScheme, setPrefersColorScheme] = useState(() => localStorage.getItem('prefers-color-scheme') || 'light');

  useEffect(() => localStorage.setItem('prefers-color-scheme', prefersColorScheme), [prefersColorScheme]);

  const onClick = () => prefersColorScheme === 'dark' ? setPrefersColorScheme('light') : setPrefersColorScheme('dark');
  return (
    <ThemeProvider theme={getTheme(prefersColorScheme)}>
      <Global styles={restCss} />
      <AppWrapper>
        <button type="button" onClick={onClick}> {prefersColorScheme} </button>
       Learn React
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
