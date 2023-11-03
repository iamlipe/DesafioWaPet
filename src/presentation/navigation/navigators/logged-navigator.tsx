import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PetDetilsScreen, ProfileScreen } from '@/presentation/screens';
import { LoggedStackParamsList, NavPropsLogged } from '../routes/logged-routes';
import { PetsFragmentStack } from './pets-fragment-navigator';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Logged = createNativeStackNavigator<LoggedStackParamsList>();

export function LoggedStack() {
  const { colors } = useTheme();
  const navigation = useNavigation<NavPropsLogged>();

  const renderButtonProfile = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Feather name="user" size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <Logged.Navigator screenOptions={{ contentStyle: { backgroundColor: colors.background[900] } }}>
      <Logged.Screen
        name="Pets"
        component={PetsFragmentStack}
        options={{ title: 'Pets', headerRight: renderButtonProfile, headerShadowVisible: false }}
      />
      <Logged.Screen
        name="PetDetails"
        component={PetDetilsScreen}
        options={{ title: 'Pet Details' }}
      />
      <Logged.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile', presentation: 'modal' }}
      />
    </Logged.Navigator>
  );
}
