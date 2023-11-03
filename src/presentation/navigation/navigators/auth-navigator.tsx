import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@/presentation/screens/login-screen';
import { AuthStackParamsList } from '../routes/auth-routes';
import { useTheme } from 'styled-components/native';

const Auth = createNativeStackNavigator<AuthStackParamsList>();

export function AuthStack() {
  const { colors } = useTheme();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background[900] },
      }}>
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
}
