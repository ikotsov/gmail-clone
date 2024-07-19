import { Theme } from '@/themes/types';
import { Text as RNText } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  children: string;
  underline?: boolean;
  color?: keyof Theme['text'];
  m?: keyof Theme['spacing'];
};

function Text(props: Props) {
  const { children, underline, color, m } = props;

  const { styles } = useStyles(stylesheet);

  return <RNText style={styles.text({ underline, color, m })}>{children}</RNText>;
}

const stylesheet = createStyleSheet(theme => ({
  text: (params: Omit<Props, 'children'>) => ({
    color: params.color ? theme.text[params.color] : theme.text.sidebar,
    textDecorationLine: params.underline ? 'underline' : 'none',
    margin: params.m ? theme.spacing[params.m] : undefined
  })
}));

export default Text;
