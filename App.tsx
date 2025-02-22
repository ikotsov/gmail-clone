/**
 * This import should be at the top of the file. Make sure there's nothing else before it.
 * Check out the installation steps here {@link https://reactnavigation.org/docs/stack-navigator/#installation}
 */
import 'react-native-gesture-handler';

// Register themes
import '@/themes/setup';

import RootNavigator from '@/nav/root';
import { StatusBar } from 'expo-status-bar';
import Providers from '@/providers';

export default function App() {
  return (
    <Providers>
      <StatusBar style="auto" />
      <RootNavigator />
    </Providers>
  );
}
