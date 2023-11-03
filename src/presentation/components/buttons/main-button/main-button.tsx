import React from 'react';

import * as Styled from './styles';

import { MainButtonProps } from './types';

export function MainButton({ title, loading, ...rest }: MainButtonProps) {
  return (
    <Styled.Wrapper disabled={loading} {...rest}>
      <Styled.Title>{title}</Styled.Title>
      {loading && <Styled.Loading />}
    </Styled.Wrapper>
  );
}
