import React from 'react';
import * as Styled from './styles';
import {
  FieldErrorMessage,
  FieldText,
  FieldTextPassword,
  Typography,
} from '@/presentation/components';
import { useLoginScreenViewController } from './login-view-controller';

export function LoginScreen() {
  const dog = '../../../main/assets/imgs/good-boy.png';
  const viewController = useLoginScreenViewController();

  return (
    <Styled.Container>
      <Styled.GoodBoy resizeMode="contain" source={require(dog)} alt="good-boy" />

      <Typography type="h2">Welcome back</Typography>
      <Typography type="h5">Please enter your account here</Typography>

      <Styled.Form>
        <FieldText
          label="E-mail"
          placeholder="youremail@email.com"
          keyboardType="email-address"
          value={viewController.values.email.toLowerCase()}
          onChangeText={viewController.handleChange('email')}
        />

        <FieldErrorMessage
          message={
            viewController.submitCount && viewController.errors.email
              ? viewController.errors.email
              : ''
          }
        />

        <FieldTextPassword
          label="Password"
          placeholder="*************"
          value={viewController.values.password}
          onChangeText={viewController.handleChange('password')}
        />

        <Styled.SubmitButton
          title="Login"
          onPress={() => viewController.handleSubmit()}
          loading={viewController.isLoading}
        />
      </Styled.Form>
    </Styled.Container>
  );
}
