import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from '@/presentation/navigation';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '@/presentation/contexts';
import { theme } from '@/presentation/theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
