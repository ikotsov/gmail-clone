import { UnistylesRegistry } from 'react-native-unistyles';
import lightTheme from './light';
import darkTheme from './dark';

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme
}).addConfig({
  initialTheme: 'light'
});
