import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity(({ theme }) => ({
  minHeight: 54,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  borderRadius: theme.effects.border.radius.sm,
  backgroundColor: theme.colors.primary[500],
  padding: theme.effects.spacing.sm,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.lg,
  color: theme.colors.white,
}));

export const Loading = styled.ActivityIndicator.attrs({ size: 'small', color: 'white' })``;
