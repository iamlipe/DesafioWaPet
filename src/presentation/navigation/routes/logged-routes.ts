import { PetModel } from '@/domain/models';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoggedStackParamsList = {
  Profile: undefined;
  Pets: undefined;
  PetDetails: { data: PetModel };
};

export type NavPropsLogged = NativeStackNavigationProp<LoggedStackParamsList>;
