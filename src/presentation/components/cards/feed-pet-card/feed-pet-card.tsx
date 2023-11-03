import React from 'react';

import * as Styled from './styles';
import { FeedPetCardProps } from './types';

export function FeedPetCard({ image, title, description, ...rest }: FeedPetCardProps) {
  return (
    <Styled.Wrapper {...rest}>
      <Styled.Image source={{ uri: image }} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  );
}
