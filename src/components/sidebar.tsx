import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from './box';
import Text from './text';

type Props = DrawerContentComponentProps;

function Sidebar(props: Props) {
  return (
    <Box fullScreen bg="sidebarBackground">
      <SafeAreaView>
        <Text color="sidebar" m="lg">
          TEST
        </Text>
      </SafeAreaView>
    </Box>
  );
}

export default Sidebar;
