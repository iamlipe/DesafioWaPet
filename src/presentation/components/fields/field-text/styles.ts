import styled from 'styled-components/native';

export const Wrapper = styled.View(({ theme }) => ({
  marginBottom: theme.effects.spacing.md,
}));

export const Label = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.md,
  color: theme.colors.primary[500],
  marginBottom: theme.effects.spacing.nn,
}));

export const InputText = styled.TextInput(({ theme }) => ({
  height: 54,
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[900],
  backgroundColor: theme.colors.background[700],
  paddingLeft: theme.effects.spacing.sm,
  paddingRight: theme.effects.spacing.sm,
  borderBottomWidth: theme.effects.border.width.tl,
  borderColor: theme.colors.primary[500],
  borderTopRightRadius: theme.effects.border.radius.sm,
  borderTopLeftRadius: theme.effects.border.radius.sm,
}));
