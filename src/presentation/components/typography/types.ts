import { StyleProp, TextProps, TextStyle } from 'react-native';
import { textStyle } from './styles';

export interface TypographyProps extends TextProps {
  children: React.ReactNode;
  type?: keyof typeof textStyle;
  style?: StyleProp<TextStyle>;
}

export interface TextStyleProps {
  type: keyof typeof textStyle;
}
