import styled from 'styled-components/native';

export const Container = styled.View(() => ({
  flex: 1,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[800],
}));

export const Description = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.regular,
  fontSize: theme.fonts.size.md,
  color: theme.colors.gray[600],
}));
