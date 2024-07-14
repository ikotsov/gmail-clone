import { SafeAreaProvider } from 'react-native-safe-area-context';

function Providers({ children }: { children: React.ReactNode }) {
  let enhancedChildren = children;

  enhancedChildren = <SafeAreaProvider>{enhancedChildren}</SafeAreaProvider>;

  return enhancedChildren;
}

export default Providers;
