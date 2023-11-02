import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CatsFragmentView } from '@/presentation/screens';
import { DogsFragmentView } from '@/presentation/screens';
import { PetsStackParamsList } from '../routes';

const PetsFragment = createMaterialTopTabNavigator<PetsStackParamsList>();

export function PetsFragmentStack() {
  return (
    <PetsFragment.Navigator>
      <PetsFragment.Screen name="DogsFragment" component={CatsFragmentView} />
      <PetsFragment.Screen name="CatsFragment" component={DogsFragmentView} />
    </PetsFragment.Navigator>
  );
}
