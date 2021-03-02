import { css } from '@emotion/react';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';
import { UIComponentSize } from '../lib/types';

export interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  size?: UIComponentSize;
  icon?: JSX.Element;
  badgeButton?: JSX.Element;
  children?: ReactNode;
}

export let Input: React.FC<InputProps> = (props) => {
  let { icon, badgeButton, size = 'md', children, ...rest } = props;
  let [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  let containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let el = containerRef.current;
    if (el) {
      let rect = el.getBoundingClientRect();
      let padding = calcPadding(rect.height);
      setDimensions({ width: rect.width + padding * 2, height: rect.height });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      css={(theme) => css`
        ${tw`box-border relative inline-flex`}
        --badgeBg: ${theme.colors.borderInputPrimary};
        --badgeText: ${theme.colors.bgInputPrimary};
        --border: ${theme.colors.borderInputPrimary};
        --text: ${theme.colors.textInput};
        padding: 0 ${calcPadding(dimensions.height) + 5}px;

        :hover {
          --badgeBg: #666;
        }
      `}
    >
      <svg
        aria-hidden
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        css={css`
          ${tw`absolute overflow-visible`}
          top: 0;
          left: 0;
          width: 100%;
          fill: none;
          stroke-width: 2;
          stroke: var(--border, #000);
        `}
      >
        <path d={generatePath(dimensions)}></path>
      </svg>
      <div
        css={css`
          ${tw`relative flex items-center`}
          color: var(--text);
        `}
      >
        {icon}
        <input
          css={css`
            ${tw`relative px-2 py-4 border-none outline-none`}
            ${sizeToTextSize(size)}
            background: transparent;
          `}
          {...rest}
        />
        {badgeButton}
      </div>
    </div>
  );
};

function generatePath(dimensions: { width: number; height: number }): string {
  let { width, height } = dimensions;
  let baseWidth = calcPadding(height);

  return `
  M${width - baseWidth} 0
  q${baseWidth * 0.168} 0 ${baseWidth * 0.295} ${height * 0.0695}
  l${baseWidth * 0.59} ${height * 0.375}
  q${baseWidth * 0.105} ${height * 0.0695} 0 ${height * 0.125}
  l-${baseWidth * 0.59} ${height * 0.375}
  q-${baseWidth * 0.105} ${height * 0.0695} -${baseWidth * 0.295} ${height * 0.0695}
  H${baseWidth}
  q-${baseWidth * 0.168} 0 -${baseWidth * 0.295} -${height * 0.0695}
  l-${baseWidth * 0.59} -${height * 0.375}
  q-${baseWidth * 0.105} -${height * 0.0695} 0 -${height * 0.125}
  l${baseWidth * 0.59} -${height * 0.375}
  q${baseWidth * 0.105} -${height * 0.0695} ${baseWidth * 0.295} -${height * 0.0695}
  Z
  `;
}

function calcPadding(height: number) {
  return height * 0.4;
}

function sizeToTextSize(size: UIComponentSize) {
  switch (size) {
    case 'sm':
      return tw`text-sm`;
    case 'md':
      return tw`text-base`;
    case 'lg':
      return tw`text-lg`;
    default:
      return tw`text-base`;
  }
}
