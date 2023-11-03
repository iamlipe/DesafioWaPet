import { MainButton } from '@/presentation/components';
import styled from 'styled-components/native';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.effects.spacing.md,
}));

export const Form = styled.View(({ theme }) => ({
  width: '100%',
  marginTop: theme.effects.spacing.hg,
  marginBottom: theme.effects.spacing.hg,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.lt,
}));

export const SubmitButton = styled(MainButton)`
  margin-top: ${({ theme }) => theme.effects.spacing.vl}px;
`;

export const GoodBoy = styled.Image(() => ({
  height: 160,
}));
