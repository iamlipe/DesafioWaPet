import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@/presentation/screens/login-screen';
import { AuthStackParamsList } from '../routes/auth-routes';

const Auth = createNativeStackNavigator<AuthStackParamsList>();

export function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
}
