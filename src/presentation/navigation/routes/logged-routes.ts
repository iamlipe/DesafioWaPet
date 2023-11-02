import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoggedStackParamsList = {
  Pets: undefined;
  PetDetails: undefined;
};

export type NavPropsLogged = NativeStackNavigationProp<LoggedStackParamsList>;
