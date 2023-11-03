import { useRoute, RouteProp } from '@react-navigation/native';
import { StackParamsList } from './types';

export function usePetDetailsViewController() {
  const { params } = useRoute<RouteProp<StackParamsList, 'PetData'>>();

  return { pet: params.data };
}
