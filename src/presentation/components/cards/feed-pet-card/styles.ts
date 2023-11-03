import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity(({ theme }) => ({
  width: '100%',
  marginBottom: theme.effects.spacing.lg,
}));

export const Image = styled.Image(({ theme }) => ({
  width: '100%',
  height: 360,
  borderRadius: theme.effects.border.radius.md,
  marginBottom: theme.effects.spacing.sm,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.s2,
  color: theme.colors.gray[800],
  marginBottom: theme.effects.spacing.nn,
}));

export const Description = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.regular,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[600],
}));
