import { Theme } from '@/themes/types';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  children: React.ReactNode;
  fullScreen?: boolean;
  bg?: keyof Theme['bg'];
};

function Box(props: Props) {
  const { children, fullScreen, bg } = props;

  const { styles } = useStyles(stylesheet);

  return <View style={styles.container({ fullScreen, bg })}>{children}</View>;
}

const stylesheet = createStyleSheet(theme => ({
  container: (params: Omit<Props, 'children'>) => ({
    flex: params.fullScreen ? 1 : 0,
    backgroundColor: params.bg ? theme.bg[params.bg] : theme.colors.background
  })
}));

export default Box;
