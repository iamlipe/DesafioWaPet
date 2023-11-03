import React from 'react';
import * as Styled from './styles';
import { FieldTextProps } from './types';
import { useTheme } from 'styled-components/native';

export function FieldText({ label, wrapperStyle = {}, ...rest }: FieldTextProps) {
  const { colors } = useTheme();

  return (
    <Styled.Wrapper style={wrapperStyle}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputText
        placeholderTextColor={colors.gray[400]}
        cursorColor={colors.primary[600]}
        {...rest}
      />
    </Styled.Wrapper>
  );
}
