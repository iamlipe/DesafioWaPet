import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoggedStack } from './logged-navigator';
import { AuthContext } from '@/presentation/contexts';
import { AuthStack } from './auth-navigator';
import { SyncScreen } from '@/presentation/screens';

export function Routes() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <SyncScreen />;
  }

  return <NavigationContainer>{user ? <LoggedStack /> : <AuthStack />}</NavigationContainer>;
}
