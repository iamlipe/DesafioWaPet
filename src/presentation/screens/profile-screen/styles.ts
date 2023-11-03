import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background[900],
}));

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: theme.colors.background[900],
  paddingLeft: theme.effects.spacing.md,
  paddingRight: theme.effects.spacing.md,
  paddingTop: theme.effects.spacing.vl,
  paddingBottom: theme.effects.spacing.vl,
}));

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;
