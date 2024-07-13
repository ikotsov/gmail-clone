import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDrawer from './home';

const RootStackScreens = {
  HomeDrawer: 'Home.drawer'
} as const;

type RootStackParamList = {
  [RootStackScreens.HomeDrawer]: undefined;
};

function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName={RootStackScreens.HomeDrawer}>
      <Stack.Screen
        name={RootStackScreens.HomeDrawer}
        component={HomeDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
