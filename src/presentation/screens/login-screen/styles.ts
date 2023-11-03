import styled from 'styled-components/native';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.primary[300],
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.family.semiBold,
  fontSize: theme.fonts.size.lt,
}));
