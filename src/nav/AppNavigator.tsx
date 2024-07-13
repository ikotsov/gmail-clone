import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDrawer from './HomeNavigator';

const AppStackScreens = {
  HomeDrawer: 'Home.drawer'
} as const;

type AppStackParamList = {
  [AppStackScreens.HomeDrawer]: undefined;
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName={AppStackScreens.HomeDrawer}>
      <Stack.Screen
        name={AppStackScreens.HomeDrawer}
        component={HomeDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
