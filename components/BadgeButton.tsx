import { css } from '@emotion/react';
import React, { ReactNode, useMemo } from 'react';
import tw from 'twin.macro';
import { cloneElement } from '../lib/cloneElement';
import { UIComponentSize, UIComponentVariant } from '../lib/types';

export interface BadgeButtonProps {
  icon: JSX.Element;
  size?: UIComponentSize;
  variant?: UIComponentVariant;
  children?: ReactNode;
}

export let BadgeButton: React.FC<BadgeButtonProps> = (props) => {
  let { children, icon, variant = 'primary', size = 'md', ...rest } = props;
  let computedSize = useMemo(() => {
    return matchSize(size);
  }, [size]);

  return (
    <div
      css={(theme) => css`
        ${tw`relative`}
        width: ${computedSize}px;
        ${variant === 'primary' && `--bg: ${theme.colors.bgButtonPrimary};`}
        ${variant === 'secondary' && `--bg: ${theme.colors.bgButtonSecondary};`}
        ${variant === 'lifted' && `--bg: ${theme.colors.bgButtonLifted};`}
        ${variant === 'lifted' && `filter: drop-shadow(-1px 3px 6px ${theme.colors.shButton});`};
        line-height: 0;
        color: var(--badgeText, ${theme.colors.textButton});
      `}
      {...rest}
    >
      <svg
        viewBox="0 0 4.5 4"
        css={css`
          fill: var(--badgeBg, var(--bg));
        `}
      >
        <path d="M 0.77 0.41 C 0.91 0.16 1.18 0 1.47 0 L 2.93 0 C 3.22 0 3.49 0.16 3.63 0.41 L 4.29 1.61 C 4.42 1.85 4.42 2.15 4.29 2.39 L 3.63 3.59 C 3.49 3.84 3.22 4 2.93 4 H 1.47 C 1.18 4 0.91 3.84 0.77 3.59 L 0.11 2.39 C -0.02 2.15 -0.02 1.85 0.11 1.61 L 0.77 0.41 Z"></path>
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

function matchSize(size: UIComponentSize): number {
  switch (size) {
    case 'sm':
      return 24;
    case 'md':
      return 32;
    case 'lg':
      return 40;
    default:
      return 32;
  }
}
