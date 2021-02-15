import { css } from '@emotion/react';
import { default as React } from 'react';

export interface WalletIconProps {}

export let WalletIcon: React.FC<WalletIconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      css={css`
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
      `}
      {...props}
    >
      <svg viewBox="0 0 38 35">
        <path d="M7.95 3.86Q9.47 1.02 12.87 1L25.13 1Q28.53 1.02 30.05 3.86L36.24 14.69Q37.7 17.5 36.24 20.31L30.05 31.14Q28.53 34 25.13 34H12.87Q9.47 34 7.95 31.14L1.76 20.31Q.3 17.5 1.76 14.69L7.95 3.86ZM35.2 12.92H23.38C20.85 12.92 18.8 14.97 18.8 17.5V17.5C18.8 20.03 20.85 22.08 23.38 22.08H35.2M22.91 18.5A1 1 0 1022.9 18.5Z"></path>
      </svg>
    </svg>
  );
};
