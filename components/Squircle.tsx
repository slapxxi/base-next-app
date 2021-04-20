import { css } from '@emotion/react';
import { ReactNode, useMemo } from 'react';
import tw from 'twin.macro';

export interface SquircleProps {
  width: number;
  height: number;
  radius?: number;
  children?: ReactNode;
  [prop: string]: any;
}

export let Squircle: React.FC<SquircleProps> = (props) => {
  let { width, height, radius = height / 2, children, strokeWidth = 0, ...rest } = props;
  let memoStrokeWidth = useMemo(
    () => (isNaN(parseInt(strokeWidth, 10)) ? 0 : parseInt(strokeWidth, 10)),
    [strokeWidth],
  );
  let finalWidth = width + memoStrokeWidth * 2;
  let finalHeight = height + memoStrokeWidth * 2;

  return (
    <div
      css={css`
        ${tw`relative`}
        width: ${finalWidth}px;
        height: ${finalHeight}px;
        overflow: hidden;
      `}
      {...rest}
    >
      <svg
        viewBox={`0 0 ${finalWidth} ${finalHeight}`}
        width={finalWidth}
        height={finalHeight}
        css={css`
          ${tw`absolute`}
          left: 0;
          top: 0;
        `}
        strokeWidth={memoStrokeWidth}
        {...rest}
      >
        <path
          d={generateBox(width, height, radius)}
          transform={`translate(${memoStrokeWidth} ${memoStrokeWidth})`}
        />
      </svg>
      <div
        css={css`
          ${tw`relative`}
          height: 100%;
        `}
      >
        {children}
      </div>
    </div>
  );
};

function generateBox(width: number, height: number, r = height / 2): string {
  let h2 = height / 2;
  let dr = Math.min(h2, Math.max(0, r));

  return `
  M0 ${h2}
  c0 -${dr} ${h2 - dr} -${h2} ${h2} -${h2}
  H${width - h2}
  c${dr} 0 ${h2} ${h2 - dr} ${h2} ${h2}
  s-${h2 - dr} ${h2} -${h2} ${h2}
  H${h2}
  c-${dr} 0 -${h2} -${h2 - dr} -${h2} -${h2}
  `;
}
