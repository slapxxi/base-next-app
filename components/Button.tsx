import { css } from '@emotion/react';
import { ReactNode, useMemo } from 'react';
import tw from 'twin.macro';
import { cloneElement } from '../lib/cloneElement';
import { Theme, UIComponentSize, UIComponentVariant } from '../lib/types';

export interface ButtonProps {
  size?: UIComponentSize;
  variant?: UIComponentVariant;
  badgeButton?: JSX.Element;
  children?: ReactNode;
}

export let Button: React.FC<ButtonProps> = (props) => {
  let { children, badgeButton, variant = 'primary', size = 'md' } = props;
  let computedSize = matchSize(size);
  let variantStyles = useMemo(() => {
    switch (variant) {
      case 'primary':
        return (theme: Theme) => css`
          --bg: ${theme.colors.bgButtonPrimary};
          --badgeBg: ${theme.colors.bgBadgePrimary};
        `;
      case 'secondary':
        return (theme: Theme) => css`
          --bg: ${theme.colors.bgButtonSecondary};
          --badgeBg: ${theme.colors.bgBadgeSecondary};
        `;
      case 'lifted':
        return (theme: Theme) => css`
          --bg: ${theme.colors.bgButtonLifted};
          --badgeBg: ${theme.colors.bgBadgeLifted};
          filter: drop-shadow(-1px 3px 6px ${theme.colors.shButton});
        `;
      default:
        return (_theme: Theme) => css``;
    }
  }, [variant]);

  return (
    <div
      css={(theme) => css`
        ${tw`inline-flex`}
        ${variantStyles(theme)}
        --color: #000;

        :hover {
          --bg: ${theme.colors.bgButtonHover};
          --color: ${theme.colors.textButtonHover};
          --badgeBg: #666;
          --badgeText: #fff;
        }
      `}
    >
      <svg
        viewBox="0 0 3.1 6.4"
        css={css`
          height: ${computedSize}px;
          fill: var(--bg);
        `}
      >
        <path d="M1.5.4A.8.8 90 012.2 0H3.1V6.4H2.2A.8.8 90 011.5 6L.13 3.6A.8.8 90 01.13 2.8L1.5.4Z"></path>
      </svg>
      <div
        css={css`
          ${tw`flex flex-1 items-center justify-center font-sans`}
          background: var(--bg);
          color: var(--color);
        `}
      >
        {children}
        {badgeButton &&
          cloneElement(badgeButton, {
            size,
            variant,
            css: css`
              transform: translateX(50%);
              z-index: 10;
            `,
          })}
      </div>
      <svg
        viewBox="0 0 3.1 6.4"
        css={css`
          height: ${computedSize}px;
          fill: var(--bg);
        `}
      >
        <path d="M1.6 6A.8.8 90 01.9 6.4H0V-0H.9A.8.8 90 011.6.4L3 2.8A.8.8 90 013 3.6L1.6 6Z"></path>
      </svg>
    </div>
  );
};

function matchSize(size: UIComponentSize): number {
  switch (size) {
    case 'sm':
      return 32;
    case 'md':
      return 56;
    case 'lg':
      return 64;
    default:
      return 24;
  }
}
