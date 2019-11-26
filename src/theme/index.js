import theme from './theme';
import restCss from './reset-ccs';
import lightScheme from './lightScheme';
import darkScheme from './darkScheme';

const getTheme = (preference) => preference === 'dark' ? ({ ...theme, ...darkScheme }) : ({ ...theme, ...lightScheme });

export {
  theme,
  lightScheme,
  darkScheme,
  getTheme,
  restCss,
};
