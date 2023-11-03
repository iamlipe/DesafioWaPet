import React from 'react';

import * as Styled from './styles';

import { TypographyProps } from './types';

export function Typography({ children, type = 'body', ...rest }: TypographyProps) {
  return (
    <Styled.Text type={type} {...rest}>
      {children}
    </Styled.Text>
  );
}
