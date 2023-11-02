import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PetsStackParamsList = {
  DogsFragment: undefined;
  CatsFragment: undefined;
};

export type NavPropsPets = NativeStackNavigationProp<PetsStackParamsList>;
