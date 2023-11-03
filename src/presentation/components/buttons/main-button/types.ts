import { TouchableOpacityProps } from 'react-native';

export interface MainButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}
