import styled, { css } from 'styled-components/native';
import { TextStyleProps } from './types';

export const textStyle = {
  h1: css`
    font-family: ${({ theme }) => theme.fonts.family.bold};
    font-size: ${({ theme }) => theme.fonts.size.lt}px;
  `,
  h2: css`
    font-family: ${({ theme }) => theme.fonts.family.bold};
    font-size: ${({ theme }) => theme.fonts.size.tl}px;
  `,
  h3: css`
    font-family: ${({ theme }) => theme.fonts.family.semiBold};
    font-size: ${({ theme }) => theme.fonts.size.s1}px;
  `,
  h4: css`
    font-family: ${({ theme }) => theme.fonts.family.semiBold};
    font-size: ${({ theme }) => theme.fonts.size.s2}px;
  `,
  h5: css`
    font-family: ${({ theme }) => theme.fonts.family.semiBold};
    font-size: ${({ theme }) => theme.fonts.size.lg}px;
  `,
  h6: css`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => theme.fonts.size.lg}px;
  `,
  body: css`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => theme.fonts.size.md}px;
  `,
};

export const Text = styled.Text<TextStyleProps>`
  ${({ type }) => css`
    ${textStyle[type]}
  `};

  color: ${({ theme }) => theme.colors.gray[800]};
`;
