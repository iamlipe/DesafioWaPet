import React from 'react';
import * as Styled from './styles';

export function SyncScreen() {
  const dog = '../../../main/assets/imgs/good-boy.png';

  return (
    <Styled.Container>
      <Styled.GoodBoy resizeMode="contain" source={require(dog)} alt="good-boy" />
      <Styled.Text>Carregando...</Styled.Text>
    </Styled.Container>
  );
}
