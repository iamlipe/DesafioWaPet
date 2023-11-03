import styled from 'styled-components/native';

export const Container = styled.View(({}) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.primary[600],
}))`
  margin-bottom: ${({ theme }) => theme.effects.spacing.md}px;
`;

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.s2,
  color: theme.colors.gray[800],
}));
