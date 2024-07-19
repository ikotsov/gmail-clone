import darkTheme from './dark';
import lightTheme from './light';

export type Theme = typeof lightTheme;

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
