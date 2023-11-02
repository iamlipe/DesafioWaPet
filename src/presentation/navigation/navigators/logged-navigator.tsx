import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PetDetilsScreen } from '@/presentation/screens';
import { LoggedStackParamsList } from '../routes/logged-routes';
import { PetsFragmentStack } from './pets-fragment-navigator';

const Logged = createNativeStackNavigator<LoggedStackParamsList>();

export function LoggedStack() {
  return (
    <Logged.Navigator>
      <Logged.Screen name="Pets" component={PetsFragmentStack} />
      <Logged.Screen name="PetDetails" component={PetDetilsScreen} />
    </Logged.Navigator>
  );
}
