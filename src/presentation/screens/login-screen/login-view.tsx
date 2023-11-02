import React from 'react';
import { View, Text, Button } from 'react-native';
import { useLoginScreenViewController } from './login-view-controller';

export function LoginScreen() {
  const viewController = useLoginScreenViewController();

  return (
    <View>
      <Text>Login Screen</Text>

      <Button title="Login" onPress={viewController.handleLogin} />
    </View>
  );
}
