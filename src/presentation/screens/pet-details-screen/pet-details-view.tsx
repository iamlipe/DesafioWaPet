import React from 'react';
import * as Styled from './styles';
import { usePetDetailsViewController } from './pet-details-view-controller';
import { Typography } from '@/presentation/components';

export function PetDetilsScreen() {
  const viewController = usePetDetailsViewController();

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Typography type="h2">{viewController.pet.breed.name}</Typography>

        <Styled.Image source={{ uri: viewController.pet.image }} />

        <Styled.Description type="h6">
          Temperament: {viewController.pet.breed.temperament}
        </Styled.Description>

        <Styled.Description type="h6">Weight: {viewController.pet.breed.weight}</Styled.Description>

        <Styled.Description type="h6">
          Life Span: {viewController.pet.breed.lifeSpan}
        </Styled.Description>
      </Styled.Container>
    </Styled.SafeArea>
  );
}
