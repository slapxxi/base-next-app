import { css } from '@emotion/react';

export interface BearIconProps {
  withBg?: boolean;
  wink?: boolean;
}

export let BearIcon: React.FC<BearIconProps> = (props) => {
  let { withBg = false, wink = false } = props;

  return (
    <svg
      fill="none"
      viewBox="0 0 380 405"
      css={css`
        max-width: 100px;
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
      <g transform={`translate(${withBg ? 30 : 0})`}>
        {withBg && (
          <path
            d="M301.7 309.1L341 223.8Q348.5 208.6 337.9 194.5L281.3 115.9M13.1 305.1L-26.2 219.8Q-33.7 204.6-21.5 191.1L42.1 117.6"
            fill="#4a0500"
            stroke="none"
          ></path>
        )}
        <path
          d="M63 53.5Q29 133 13.1 305.1Q13.2 340.5 46 385.2Q53.4 397.7 66.4 398.5L250.7 400.6Q259.6 400.1 266.3 390.8Q301.9 342 301.7 309.1Q297 153 264 49.5C272.5 41.3 286 18 265.5 6S231.5 13.5 230 28.5Q159 7 95 29C89 14.5 71-1 54.5 11S51 46 63 53.5Z"
          fill="url(#beargrad)"
        />
        <path
          d={`M168.5 233q-33.5 2-48-91c-2.2-19 13-38 49-38q56.5 2 41.5 60q-15 68-42.5 69ZM164 160q-2 23 2.5 47${
            wink
              ? 'M155.6 201.5a13.3 13.3 0 0021.6.1M223.249 101.841q5.704-6.324 12.648-1.86'
              : 'M157.5 203.5a13.3 13.3 0 0018 0'
          }`}
        ></path>
        <path
          d={`M78.6 25.7c3.5 6 5.4 12.3-3.1 16.5s-13 0-15-6.7s-1.7-13.7 3-16.5s11.5.8 15 6.7ZM242.5 23.6c-3.6 5.9-3.5 12.5 3 16.5s13-1.9 15-8.6s2.7-12.7-2-15.5s-12.5 1.6-16 7.6Z${
            wink
              ? ''
              : 'M235.7 99.5c1.3 4.2-.5 7.1-3.9 8.2s-7.2-1.6-8.5-5.8s.5-7.1 3.9-8.2s7.2 1.6 8.5 5.8Z'
          }M114 100.6c-.4 4.4-3.7 7.7-7.3 7.4s-6-4.2-5.7-8.6s3.7-7.7 7.3-7.4s6.1 4 5.7 8.6ZM192.5 137.5c-.6 8.8-11.4 27-28.6 27s-27-18.7-27.5-25.9s.9-13.8 27.5-14.9s29.2 5 28.6 13.8Z`}
          fill="#4A0500"
          stroke="none"
        />
      </g>
    </svg>
  );
};
