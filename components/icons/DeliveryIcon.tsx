import { css } from '@emotion/react';

export interface DeliveryIconProps {}

export let DeliveryIcon: React.FC<DeliveryIconProps> = (props) => {
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
      <svg viewBox="1 0 38 35">
        <path d="M8.95 3.86A5.67 5.67 0 0113.87 1H26.13A5.67 5.67 0 0131.05 3.86L37.25 14.69C38.24 16.43 38.24 18.57 37.25 20.31L31.05 31.14A5.67 5.67 0 0126.13 34H13.87A5.67 5.67 0 018.95 31.14L2.75 20.31C1.76 18.57 1.76 16.43 2.75 14.69L8.95 3.86Z" />
        <path d="M21.46 19.93l7.04 13.35" stroke-linecap="round" />
        <path d="M7.5 6.04h18.2c.6 0 1.15.32 1.45.84l2.2 3.84c.4.73.43 1.6.06 2.36l-1.4 2.81a.83.83 0 01-1.47.04l-2.31-4.05c-.3-.52-.85-.84-1.45-.84H4.58" />
        <path d="M29.17 1.67l-8.2 14.36a3.33 3.33 0 01-2.9 1.68H1.67" />
      </svg>
    </svg>
  );
};
