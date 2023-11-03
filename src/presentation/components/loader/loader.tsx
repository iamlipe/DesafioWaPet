import React from 'react';

import * as Styled from './styles';

export function Loader() {
  return (
    <Styled.Container>
      <Styled.Loading />
      <Styled.Title>Carregando...</Styled.Title>
    </Styled.Container>
  );
}
