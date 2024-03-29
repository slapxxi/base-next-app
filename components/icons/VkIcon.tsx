import { css } from '@emotion/react';

export interface VkIconProps {}

export let VkIcon: React.FC<VkIconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      css={css`
        fill: currentColor;
      `}
      {...props}
    >
      <svg viewBox="0 0 16.7 10">
        <path d="M9.2 10C9.2 10 9.5 10 9.7 9.8C9.8 9.7 9.8 9.5 9.8 9.3C9.8 9.1 9.8 8 10.4 7.7C11 7.5 11.8 9.1 12.6 9.7C13.2 10.1 13.7 10 13.7 10L15.9 10C15.9 10 17 9.9 16.5 9C16.5 8.9 16.2 8.3 14.9 7C13.5 5.6 13.7 5.9 15.3 3.5C16.3 2.1 16.8 1.2 16.6.9C16.5.5 15.8.6 15.8.6L13.3.6C13.3.6 13.1.6 13 .7C12.8.8 12.7 1 12.7 1C12.7 1 12.3 2.1 11.8 3C10.7 5 10.3 5.1 10.1 4.9C9.7 4.7 9.8 3.8 9.8 3.2C9.8 1.3 10.1.5 9.2.3C9 .2 8.8.2 8 .1C7.2.1 6.4.2 6 .4C5.7.5 5.5.8 5.7.9C5.8.9 6.2 1 6.4 1.2C6.6 1.6 6.6 2.4 6.6 2.4C6.6 2.4 6.8 4.7 6.3 5C6 5.2 5.5 4.8 4.5 3C4 2.1 3.6 1 3.6 1C3.6 1 3.6.9 3.4.7C3.3.6 3 .6 3 .6L.7.6C.7.6.3.6.2.8C.1.9.2 1.2.2 1.2C.2 1.2 2 5.8 4.1 8C6 10.1 8.2 10 8.2 10H9.2Z" />
      </svg>
    </svg>
  );
};
