import { SafeAreaProvider } from 'react-native-safe-area-context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  let enhancedChildren = children;

  enhancedChildren = <SafeAreaProvider>{enhancedChildren}</SafeAreaProvider>;

  return enhancedChildren;
};
