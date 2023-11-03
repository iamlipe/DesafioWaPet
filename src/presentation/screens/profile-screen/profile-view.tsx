import React, { useContext } from 'react';
import * as Styled from './styles';
import { MainButton, Typography } from '@/presentation/components';
import { AuthContext } from '@/presentation/contexts';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export function ProfileScreen() {
  const { colors, effects } = useTheme();
  const { user, logout } = useContext(AuthContext);

  console.log(user);

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Styled.Content>
          <Feather
            name="user"
            size={60}
            color={colors.primary[500]}
            style={{ marginBottom: effects.spacing.md }}
          />
          <Typography type="h6">{'Name: ' + user?.name}</Typography>
          <Typography type="h6">{'E-mail: ' + user?.email}</Typography>
        </Styled.Content>

        <MainButton title="Logout" onPress={logout} />
      </Styled.Container>
    </Styled.SafeArea>
  );
}
