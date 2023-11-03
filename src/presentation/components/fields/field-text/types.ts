import { TextInputProps, ViewStyle } from 'react-native';

export interface FieldTextProps extends TextInputProps {
  label: string;
  wrapperStyle?: ViewStyle;
}
