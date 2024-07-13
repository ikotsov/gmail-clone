import HomeScreen from '@/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeDrawerScreens = {
  HomeScreen: 'Home.screen'
} as const;

type HomeDrawerParamList = {
  [HomeDrawerScreens.HomeScreen]: undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={HomeDrawerScreens.HomeScreen}
      screenOptions={{ drawerType: 'front', swipeEdgeWidth: 200 }}
    >
      <Drawer.Screen
        name={HomeDrawerScreens.HomeScreen}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
