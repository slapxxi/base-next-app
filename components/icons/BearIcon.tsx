import { css } from '@emotion/react';

export interface BearIconProps {}

export let BearIcon: React.FC<BearIconProps> = (props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 305 346"
      css={css`
        stroke-width: 4px;
        stroke: #4a0500;
        stroke-linecap: round;
      `}
      {...props}
    >
      <defs>
        <linearGradient id="beargrad" gradientTransform="rotate(90)">
          <stop offset="5%" stop-color="hsl(45 100% 60%)" />
          <stop offset="95%" stop-color="hsl(40 100% 50%)" />
        </linearGradient>
      </defs>
      <path
        d="M63 53.5Q29 133 13.1 305.11Q11.63 319.93 21.2 322.74Q154 364 291.44 323.2Q303.1 319.7 302.88 306.53Q297 153 264 49.5C272.5 41.3 286 18 265.5 6S231.5 13.5 230 28.5Q159 7 95 29C89 14.5 71-1 54.5 11S51 46 63 53.5Z"
        fill="url(#beargrad)"
      />
      <path d="M168.5 233q-33.5 2-48-91c-2.2-19 13-38 49-38q56.5 2 41.5 60q-15 68-42.5 69ZM164 160q-2 23 2.5 47m-9-3.5a13.3 13.3 0 0018 0"></path>
      <path
        d="M189.5 135c-.5 8-10.4 24.5-26 24.5s-24.5-17-25-23.5s.8-12.5 25-13.5s26.5 4.5 26 12.5Z"
        fill="#4a0500"
      />
      <path
        d="M78.6 25.7c3.5 6 5.4 12.3-3.1 16.5s-13 0-15-6.7s-1.7-13.7 3-16.5s11.5.8 15 6.7ZM242.5 23.6c-3.6 5.9-3.5 12.5 3 16.5s13-1.9 15-8.6s2.7-12.7-2-15.5s-12.5 1.6-16 7.6ZM235.7 99.5c1.3 4.2-.5 7.1-3.9 8.2s-7.2-1.6-8.5-5.8s.5-7.1 3.9-8.2s7.2 1.6 8.5 5.8ZM114 100.6c-.4 4.4-3.7 7.7-7.3 7.4s-6-4.2-5.7-8.6s3.7-7.7 7.3-7.4s6.1 4 5.7 8.6Z"
        fill="#4A0500"
        stroke="none"
      />
    </svg>
  );
};
