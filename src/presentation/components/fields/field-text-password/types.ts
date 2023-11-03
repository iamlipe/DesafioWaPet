import { TextInputProps, ViewStyle } from 'react-native';

export interface FieldTextPasswordProps extends TextInputProps {
  label: string;
  wrapperStyle?: ViewStyle;
}
