import { css } from '@emotion/react';
import { ReactNode } from 'react';
import tw from 'twin.macro';
import { cloneElement } from '../lib/cloneElement';
import { UIComponentSize, UIComponentVariant } from '../lib/types';

export interface ButtonProps {
  size?: UIComponentSize;
  variant?: UIComponentVariant;
  badgeButton?: JSX.Element;
  children?: ReactNode;
}

export let Button: React.FC<ButtonProps> = (props) => {
  let { children, badgeButton, variant = 'primary', size = 'md' } = props;
  let computedSize = matchSize(size);

  return (
    <div
      css={css`
        ${tw`inline-flex`}
        ${variant === 'primary' && '--bg: #f8a700;'}
        ${variant === 'secondary' && '--bg: #e7e6e8;'}
        ${variant === 'lifted' && '--bg: #fff;'}
        ${variant === 'lifted' && 'filter: drop-shadow(-1px 3px 6px #0004)'};
        --color: #000;

        :hover {
          --bg: #333;
          --color: #fff;
          --badgeBg: #666;
          --badgeText: #fff;
        }
      `}
    >
      <svg
        viewBox="0 0 3.1 6.4"
        preserveAspectRatio="none"
        css={css`
          width: ${computedSize}px;
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
        preserveAspectRatio="none"
        css={css`
          width: ${computedSize}px;
          fill: var(--bg);
          transform: rotate(180deg);
        `}
      >
        <path d="M1.5.4A.8.8 90 012.2 0H3.1V6.4H2.2A.8.8 90 011.5 6L.13 3.6A.8.8 90 01.13 2.8L1.5.4Z"></path>
      </svg>
    </div>
  );
};

function matchSize(size: UIComponentSize): number {
  switch (size) {
    case 'sm':
      return 18;
    case 'md':
      return 24;
    case 'lg':
      return 31;
    default:
      return 24;
  }
}
