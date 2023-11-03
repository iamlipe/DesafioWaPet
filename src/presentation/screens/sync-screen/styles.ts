import { Typography } from '@/presentation/components';
import styled from 'styled-components/native';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.primary[400],
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.s2,
  color: theme.colors.white,
  marginBottom: theme.effects.spacing.md,
}));

export const GoodBoy = styled.Image(() => ({
  height: 160,
}));
