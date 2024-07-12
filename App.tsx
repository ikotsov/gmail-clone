/**
 * This import should be at the top of the file. Make sure there's nothing else before it.
 * Check out the installation steps here {@link https://reactnavigation.org/docs/stack-navigator/#installation}
 */
import 'react-native-gesture-handler';

import { Providers } from '@/Providers';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Providers>
      <SafeAreaView>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Providers>
  );
}
