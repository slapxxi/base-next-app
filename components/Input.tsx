import { css } from '@emotion/react';
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useMemo, useReducer } from 'react';
import tw from 'twin.macro';
import { cloneElement } from '../lib/cloneElement';
import { Theme, UIComponentSize } from '../lib/types';

export interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  size?: UIComponentSize;
  icon?: JSX.Element;
  badgeButton?: JSX.Element;
  children?: ReactNode;
}

export let Input: React.FC<InputProps> = (props) => {
  let { icon, badgeButton, size = 'md', ...rest } = props;
  let computedSize = useMemo(() => matchSize(size), [size]);
  let [state, dispatch] = useReducer(inputReducer, { status: 'idle' });

  function handleFocus() {
    dispatch({ type: 'FOCUS' });
  }

  function handleBlur() {
    dispatch({ type: 'BLUR' });
  }

  return (
    <div
      css={(theme: any) => css`
        ${tw`inline-flex`}
        --bg: ${theme.colors.bgInputPrimary};
        --badgeBg: ${theme.colors.textInput};
        --badgeText: ${theme.colors.bgInputPrimary};
        --bgInput: ${theme.colors.bgInputPrimary};
        --textInput: ${theme.colors.textInput};
        --border: ${theme.colors.textInput};
        --textPlacholder: ${theme.colors.textInput};

        ${state.status === 'focused' && hoverStyles(theme)}

        :hover {
          ${hoverStyles(theme)}
        }
      `}
    >
      <svg
        viewBox="0 0 3.1 6.8"
        css={css`
          height: ${computedSize}px;
          stroke: var(--border);
          fill: var(--fill, none);
          stroke-width: 0.25px;
        `}
      >
        <path
          d="M1.5.4A.8.8 90 012.2 0H3.1V6.4H2.2A.8.8 90 011.5 6L.13 3.6A.8.8 90 01.13 2.8L1.5.4Z"
          css={css`
            transform: scale(1.03) translate(0.3px, 0.1px);
          `}
        ></path>
      </svg>

      <div
        css={css`
          ${tw`relative flex flex-1 items-center justify-center font-sans px-2 box-border`}
          background: var(--bg);
          color: var(--textInput);
        `}
      >
        <svg
          viewBox="0 0 3.1 6.8"
          preserveAspectRatio="none"
          css={css`
            ${tw`absolute`}
            width: 100%;
            height: 100%;
            top: 0;
            fill: none;
            stroke: var(--border);
            stroke-width: 0.48;
          `}
        >
          <line x1="0" y1="0" x2="3.1" y2="0" />
          <line x1="0" y1="6.8" x2="3.1" y2="6.8" />
        </svg>
        {icon && (
          <div
            css={css`
              ${tw`mr-2`}
              line-height: 0;
            `}
          >
            {cloneElement(icon, {
              size: computedSize / 3,
            })}
          </div>
        )}
        <input
          type="email"
          onFocus={handleFocus}
          onBlur={handleBlur}
          css={(theme: any) => css`
            ${tw`z-10`}
            min-width: 100px;
            border: 0;
            background: var(--bg);
            font-size: ${computedSize / 2.5}px;
            color: var(--textInput);

            :focus {
              outline: none;
            }

            ::placeholder {
              color: var(--textPlaceholder);
            }
          `}
          {...rest}
        />
        {badgeButton &&
          cloneElement(badgeButton, {
            size,
            css: css`
              transform: translateX(50%);
              z-index: 10;
            `,
          })}
      </div>
      <svg
        viewBox="0 0 3.1 6.8"
        css={css`
          height: ${computedSize}px;
          stroke: var(--border);
          fill: var(--fill, none);
          stroke-width: 0.25px;
        `}
      >
        <path
          d="M1.6 6A.8.8 90 01.9 6.4H0V-0H.9A.8.8 90 011.6.4L3 2.8A.8.8 90 013 3.6L1.6 6Z"
          css={css`
            transform: scale(1.03) translate(-0.3px, 0.1px);
          `}
        ></path>
      </svg>
    </div>
  );
};

let hoverStyles = (theme: Theme) => css`
  --bg: ${theme.colors.bgButtonHover};
  --fill: ${theme.colors.bgButtonHover};
  --border: ${theme.colors.bgButtonHover};
  --color: ${theme.colors.textButtonHover};
  --bgInput: ${theme.colors.bgInputHover};
  --textInput: ${theme.colors.textInputHover};
  --badgeBg: #666;
  --badgeText: #fff;
`;

function inputReducer(state, action) {
  switch (state.status) {
    case 'idle':
      switch (action.type) {
        case 'FOCUS':
          return { ...state, status: 'focused' };
        default:
          return state;
      }
    case 'focused':
      switch (action.type) {
        case 'BLUR':
          return { ...state, status: 'idle' };
        default:
          return state;
      }
    default:
      return state;
  }
}

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
