import { css, Theme } from '@emotion/react';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useMemo } from 'react';
import tw from 'twin.macro';
import { cloneElement } from '../lib/cloneElement';
import { UIComponentSize, UIComponentVariant } from '../lib/types';

export interface BadgeButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: JSX.Element;
  hover?: boolean;
  size?: UIComponentSize;
  variant?: UIComponentVariant;
  children?: ReactNode;
}

export let BadgeButton: React.FC<BadgeButtonProps> = (props) => {
  let { children, icon, variant = 'primary', size = 'md', hover = false, ...rest } = props;
  let computedSize = useMemo(() => {
    return matchSize(size);
  }, [size]);
  let computedStyles = useMemo(() => {
    return (theme: Theme) => css`
        ${tw`relative`}
        width: ${computedSize}px;
        ${variant === 'primary' && `--bg: ${theme.colors.bgButtonPrimary};`}
        ${variant === 'secondary' && `--bg: ${theme.colors.bgButtonSecondary};`}
        ${variant === 'lifted' && `--bg: ${theme.colors.bgButtonLifted};`}
        ${variant === 'lifted' && `filter: drop-shadow(-1px 3px 6px ${theme.colors.shButton});`};
        line-height: 0;
        color: var(--badgeText, ${theme.colors.textButton});
        ${hover && hoverStyles(theme, variant)}
    `;
  }, [variant, computedSize]);

  return (
    <div css={computedStyles} {...rest}>
      <svg
        viewBox="0 0 4.5 4"
        css={css`
          fill: var(--badgeBg, var(--bg));
        `}
      >
        <path d="M.8.4q.2-.4.7-.4l1.4 0q.4 0 .7.4l.7 1.2q.2.4 0 .8l-.7 1.2q-.2.4-.7.4h-1.4q-.4 0-.7-.4l-.7-1.2q-.2-.4 0-.8l.7-1.2z" />
      </svg>
      <div
        css={css`
          ${tw`absolute`}
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          line-height: 0;
        `}
      >
        {icon && cloneElement(icon, { size: computedSize / 2 })}
      </div>
    </div>
  );
};

let hoverStyles = (theme: Theme, variant: UIComponentVariant) => css`
    --bg: transparent;

  :hover {
    ${variant === 'primary' && `--bg: ${theme.colors.bgButtonPrimary};`}
    ${variant === 'secondary' && `--bg: ${theme.colors.bgButtonSecondary};`}
    ${variant === 'lifted' && `--bg: ${theme.colors.bgButtonLifted};`}
    ${variant === 'lifted' && `filter: drop-shadow(-1px 3px 6px ${theme.colors.shButton});`};
  }
`;

function matchSize(size: UIComponentSize): number {
  switch (size) {
    case 'sm':
      return 20;
    case 'md':
      return 38;
    case 'lg':
      return 44;
    default:
      return 36;
  }
}
