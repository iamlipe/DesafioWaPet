import React from 'react';

import * as Styled from './styles';

import { EmptyListProps } from './types';

export function EmptyList({ title, description }: EmptyListProps) {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Container>
  );
}
