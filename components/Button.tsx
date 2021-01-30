import { css } from '@emotion/react';
import { ReactNode, useMemo } from 'react';
import tw from 'twin.macro';
import { cloneElement } from '../lib/cloneElement';
import { Theme, UIComponentSize, UIComponentVariant } from '../lib/types';

export interface ButtonProps {
  children?: ReactNode;
  variant?: UIComponentVariant;
  size?: UIComponentSize;
  badgeButton?: JSX.Element;
  icon?: JSX.Element;
}

export let Button: React.FC<ButtonProps> = (props) => {
  let { children, badgeButton, variant = 'primary', size = 'md', icon, ...rest } = props;
  let computedSize = useMemo(() => matchSize(size), [size]);

  return (
    <div
      css={(theme) => css`
        ${tw`inline-flex`}
        --color: #000;
        ${variantStyles({ variant, theme })}

        :hover {
          --bg: ${theme.colors.bgButtonHover};
          --color: ${theme.colors.textButtonHover};
          --badgeBg: #666;
          --badgeText: #fff;
        }
      `}
      {...rest}
    >
      <svg
        viewBox="0 0 3 6"
        css={css`
          ${tw`flex-none`}
          height: ${computedSize}px;
          fill: var(--bg);
          transform: translateX(1px);
        `}
      >
        <path d="M1.5.4A.8.8 90 012.2 0H3V6H2.2A.8.8 90 011.5 5.6L.18 3.5A.95.95 90 01.18 2.5L1.5.4Z"></path>
      </svg>

      <div
        css={css`
          ${tw`flex items-center justify-center font-sans`}
          flex: 1 1 100%;
          background: var(--bg);
          color: var(--color);
        `}
      >
        {children}
        {badgeButton
          ? cloneElement(badgeButton, {
              size,
              variant,
              css: css`
                transform: translateX(50%);
                z-index: 10;
              `,
            })
          : icon
          ? cloneElement(icon, {
              css: css`
                transform: translateX(50%);
                z-index: 10;
              `,
            })
          : null}
      </div>
      <svg
        viewBox="0 0 3 6"
        css={css`
          ${tw`flex-none`}
          height: ${computedSize}px;
          transform: translateX(-1px);
          fill: var(--bg);
        `}
      >
        <path d="M1.5.4A.8.8 90 00.8 0H0V6H.8A.8.8 90 001.5 5.6L2.82 3.5A.95.95 90 002.82 2.5L1.5.4Z"></path>
      </svg>
    </div>
  );
};

function variantStyles(props: { variant: UIComponentVariant; theme: Theme }) {
  switch (props.variant) {
    case 'primary':
      return css`
        --bg: ${props.theme.colors.bgButtonPrimary};
        --badgeBg: ${props.theme.colors.bgBadgePrimary};
      `;
    case 'secondary':
      return css`
        --bg: ${props.theme.colors.bgButtonSecondary};
        --badgeBg: ${props.theme.colors.bgBadgeSecondary};
      `;
    case 'lifted':
      return css`
        --bg: ${props.theme.colors.bgButtonLifted};
        --badgeBg: ${props.theme.colors.bgBadgeLifted};
        filter: drop-shadow(-1px 3px 6px ${props.theme.colors.shButton});
      `;
    default:
      return css``;
  }
}

function matchSize(size: UIComponentSize): number {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'sm':
      return 32;
    case 'md':
      return 54;
    case 'lg':
      return 64;
    default:
      return 24;
  }
}
