import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDrawer, { HomeDrawerParamList } from './home';

type RootStackParamList = {
  HomeDrawer: NavigatorScreenParams<HomeDrawerParamList>;
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
    <Stack.Navigator initialRouteName="HomeDrawer">
      <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
