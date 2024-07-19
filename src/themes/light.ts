import { borderRadius } from './border-radius';
import { spacing } from './spacing';

const palette = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper100: '#aeaeae',
  paper300: '#767577',
  paper900: '#202020',
  blue70: '#2185d0',
  navy20: '#171a21',
  navy900: '#b9babc'
};

const lightTheme = {
  spacing,
  borderRadius,
  colors: {
    white: palette.white,
    black: palette.black,
    red: palette.red,
    blue: palette.blue,
    yellow: palette.yellow,

    primary: palette.blue70,
    windowBackground: '#f0f0f0',
    background: palette.paper10,
    foreground: palette.paper900,
    navbarBackground: palette.paper10,
    navbarBorderBottom: palette.paper100,
    sidebarBackground: palette.navy20,
    sidebarForeground: palette.navy900,
    sidebarSeparator: palette.paper00 + '20',
    headerBarBackground: palette.paper20,
    fieldInputBackground: palette.paper00,
    fieldInputPlaceholderTextColor: palette.paper300
  },
  text: {
    sidebar: palette.navy900
  },
  bg: {
    sidebarBackground: palette.navy20
  }
};

export default lightTheme;
