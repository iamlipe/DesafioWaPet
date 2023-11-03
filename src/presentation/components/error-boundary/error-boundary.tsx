import React from 'react';

import * as Styled from './styles';

import { ErrorBoundaryProps } from './types';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export function ErrorBoundary({ tryAgain }: ErrorBoundaryProps) {
  const { colors } = useTheme();

  return (
    <Styled.Container>
      <Feather name="x-circle" size={64} color={colors.status.error} />
      <Styled.Text>{'Desculpe, ocorreu um problema. Por favor, tente novamente.'}</Styled.Text>
      <Styled.ButtonTryAgain onPress={tryAgain} title="Tentar Novamente" />
    </Styled.Container>
  );
}
