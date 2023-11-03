import styled from 'styled-components/native';

export const Error = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.status.error,
  marginTop: -theme.effects.spacing.sm,
  marginBottom: theme.effects.spacing.md,
}));
