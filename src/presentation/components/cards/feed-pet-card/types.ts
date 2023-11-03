import { TouchableOpacityProps } from 'react-native';

export interface FeedPetCardProps extends TouchableOpacityProps {
  title: string;
  description: string;
  image: string;
}
