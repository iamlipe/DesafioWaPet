import React from 'react';

import * as Styled from './styles';

import { FieldErrorMessageProps } from './types';

export function FieldErrorMessage({ message }: FieldErrorMessageProps) {
  if (!message.length) {
    return null;
  }

  return <Styled.Error>{message}</Styled.Error>;
}
