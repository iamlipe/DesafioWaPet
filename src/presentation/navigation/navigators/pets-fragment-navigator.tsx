import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CatsFragmentView } from '@/presentation/screens';
import { DogsFragmentView } from '@/presentation/screens';
import { PetsStackParamsList } from '../routes';
import { useTheme } from 'styled-components/native';

const PetsFragment = createMaterialTopTabNavigator<PetsStackParamsList>();

export function PetsFragmentStack() {
  const { colors, effects } = useTheme();

  return (
    <PetsFragment.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary[800],
        tabBarPressColor: colors.primary[100],
        tabBarIndicatorStyle: {
          borderBottomWidth: effects.border.width.tl,
          borderBottomColor: colors.primary[500],
        },
      }}>
      <PetsFragment.Screen
        name="DogsFragment"
        component={DogsFragmentView}
        options={{ title: 'Dogs' }}
      />
      <PetsFragment.Screen
        name="CatsFragment"
        component={CatsFragmentView}
        options={{ title: 'Cats' }}
      />
    </PetsFragment.Navigator>
  );
}
