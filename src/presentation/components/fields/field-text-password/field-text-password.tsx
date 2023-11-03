import React, { useState } from 'react';
import * as Styled from './styles';
import { Feather } from '@expo/vector-icons';
import { FieldTextPasswordProps } from './types';
import { useTheme } from 'styled-components/native';

export function FieldTextPassword({ label, wrapperStyle = {}, ...rest }: FieldTextPasswordProps) {
  const [showTextEntry, setShowTextEntry] = useState(true);
  const { colors } = useTheme();

  return (
    <Styled.Wrapper style={wrapperStyle}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputText
        secureTextEntry={showTextEntry}
        placeholderTextColor={colors.gray[400]}
        cursorColor={colors.primary[600]}
        {...rest}
      />

      <Styled.BaseButtonSecurty onPress={() => setShowTextEntry(prev => !prev)}>
        <Feather name={showTextEntry ? 'eye' : 'eye-off'} size={24} color={colors.primary[500]} />
      </Styled.BaseButtonSecurty>
    </Styled.Wrapper>
  );
}
