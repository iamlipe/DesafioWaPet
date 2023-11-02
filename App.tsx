import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from '@/presentation/navigation';
import { AuthProvider } from '@/presentation/contexts';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
