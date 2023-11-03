import styled from 'styled-components/native';

import { Typography } from '@/presentation/components';

export const Title = styled(Typography).attrs({ type: 'h2' })`
  margin-bottom: ${({ theme }) => theme.effects.spacing.hg}px;
`;

export const LoadingMore = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.primary[200],
}))``;
