import { Typography } from '@/presentation/components';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background[900],
}));

export const Container = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingVertical: theme.effects.spacing.vl,
    paddingHorizontal: theme.effects.spacing.md,
    backgroundColor: theme.colors.background[900],
  },
}))`
  background-color: ${({ theme }) => theme.colors.background[900]};
`;

export const Image = styled.Image(({ theme }) => ({
  width: '100%',
  height: 400,
  borderRadius: theme.effects.border.radius.md,
  marginTop: theme.effects.spacing.lg,
  marginBottom: theme.effects.spacing.lg,
}));

export const Description = styled(Typography).attrs({ type: 'h6' })(({ theme }) => ({
  marginBottom: theme.effects.spacing.nn,
}));
