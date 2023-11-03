import styled from 'styled-components/native';

import { MainButton } from '../buttons';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.effects.spacing.hg,
  paddingHorizontal: theme.effects.spacing.md,
}));

export const Text = styled.Text(({ theme }) => ({
  width: '80%',
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.gray[800],
  marginVertical: theme.effects.spacing.lg,
  textAlign: 'center',
}));

export const ButtonTryAgain = styled(MainButton)({
  width: '50%',
  justifyContent: 'center',
});
