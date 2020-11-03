import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { WithTheme } from '../lib/types';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ButtonProps {
  variant: ButtonVariant;
  active?: boolean;
}

type ThemedStyles = (props: WithTheme<ButtonProps>) => (SerializedStyles | boolean | undefined)[];

let primaryStyles = (theme: any) => css`
  background: ${theme.colors.accent};
  border-color: ${theme.colors.accent};
  color: ${theme.colors.bgContent};
`;

let secondaryStyles = (theme: any) => css`
  background: ${theme.colors.bgButton};
  border-color: ${theme.colors.bgButton};
  color: ${theme.colors.bgContent};
`;

let accentStyles = (theme: any) => css`
  background: ${theme.colors.highlight};
  border-color: ${theme.colors.highlight};
  color: ${theme.colors.bgContent};
`;

let primaryStylesFn: ThemedStyles = ({ variant, theme, active }) => [
  active && primaryStyles(theme),
  variant === 'primary' &&
    css`
      :hover {
        ${primaryStyles(theme)}
      }
    `,
];

let secondaryStylesFn: ThemedStyles = ({ variant, theme, active }) => [
  active && secondaryStyles(theme),
  variant === 'secondary' &&
    css`
      :hover {
        ${secondaryStyles(theme)}
      }
    `,
];

let accentStylesFn: ThemedStyles = ({ variant, theme, active }) => [
  active && accentStyles(theme),
  variant === 'accent' &&
    css`
      :hover {
        ${accentStyles(theme)}
      }
    `,
];

export let Button = styled.button<WithTheme<ButtonProps>>`
  ${tw`flex rounded-lg p-2 text-center font-bold items-center justify-center`}

  border: 2px solid ${(props) => props.theme.colors.bgButton};

  ${primaryStylesFn}
  ${secondaryStylesFn}
  ${accentStylesFn}
`;
