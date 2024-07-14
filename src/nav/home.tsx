import Sidebar from '@/components/sidebar';
import HomeScreen from '@/screens/home';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type HomeDrawerParamList = {
  HomeScreen: undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ drawerType: 'front', swipeEdgeWidth: 200 }}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
