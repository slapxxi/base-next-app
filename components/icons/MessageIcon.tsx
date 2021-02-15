import { css } from '@emotion/react';
import { default as React } from 'react';

export interface MessageIconProps {}

export let MessageIcon: React.FC<MessageIconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      css={css`
        fill: currentColor;
      `}
      {...props}
    >
      <svg viewBox="0.7 0 38.2 35">
        <path d="M 13.7 2 H 25.96 C 27.63 2 29.18 2.9 30.01 4.35 L 36.2 15.18 C 37.02 16.62 37.02 18.38 36.2 19.82 L 34.54 22.72 L 36.26 23.68 L 37.93 20.81 A 6.67 6.67 0 0 0 37.93 14.19 L 31.74 3.36 A 6.67 6.67 0 0 0 25.96 0 H 13.69 C 11.3 0 9.1 1.28 7.9 3.36 L 1.71 14.19 A 6.67 6.67 0 0 0 1.71 20.81 L 7.91 31.64 A 6.67 6.67 0 0 0 13.68 35 H 25.95 C 28.34 35 30.55 33.72 31.73 31.64 L 37.49 31.87 Q 38.94 31.57 38.61 30.03 L 36.26 23.67 L 34.55 22.73 Q 34.03 23.71 34.32 24.48 L 36.46 29.61 L 31.24 29.42 A 0.83 0.83 0 0 0 30.42 29.91 L 30 30.65 A 4.67 4.67 0 0 1 25.96 33 H 13.69 C 12.02 33 10.47 32.1 9.64 30.65 L 3.45 19.82 A 4.67 4.67 0 0 1 3.45 15.18 L 9.65 4.35 A 4.67 4.67 0 0 1 13.68 2" />
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="13.3" cy="17.5" r="1.7" />
          <circle cx="20.3" cy="17.5" r="1.7" />
          <circle cx="27.3" cy="17.5" r="1.7" />
        </g>
      </svg>
    </svg>
  );
};
