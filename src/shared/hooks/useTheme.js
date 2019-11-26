import { useState, useEffect } from 'react';


export default (initial) => {
  const [prefersColorScheme, setPrefersColorScheme] = useState(() => localStorage.getItem('prefers-color-scheme') || initial);
  useEffect(() => localStorage.setItem('prefers-color-scheme', prefersColorScheme), [prefersColorScheme]);
  const toggleColorScheme = () => prefersColorScheme === 'dark' ? setPrefersColorScheme('light') : setPrefersColorScheme('dark');
  return [prefersColorScheme, toggleColorScheme];
};
