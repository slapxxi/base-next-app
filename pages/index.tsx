import { css } from '@emotion/react';
import { NextPage } from 'next';
import tw from 'twin.macro';

let IndexPage: NextPage = () => {
  return (
    <div
      css={css`
        ${tw`flex items-center h-full`}
        margin-top: -40px;
      `}
    >
      <Border></Border>
    </div>
  );
};

function Border() {
  return (
    <div
      css={css`
        ${tw`relative p-2 mx-auto`}
        width: 860px;
      `}
    >
      <div
        css={css`
          ${tw`absolute flex flex-col`}
          top: 80px;
          left: 80px;
          right: 80px;
          bottom: 30px;
          font-family: 'Crimson Text', serif;
          font-size: 40px;
          text-shadow: 2px 2px 1px black;
        `}
      >
        <img
          src="/img/helmet.png"
          width="300"
          alt=""
          css={css`
            ${tw`absolute`}
            top: -100px;
            right: 0;
            z-index: 1;
          `}
        />
        <h1
          css={css`
            ${tw`p-0 m-0`}
            font-size: 1em;
          `}
        >
          Leather Helmet
        </h1>
        <h2
          css={css`
            ${tw`p-0 m-0`}
            font-size: .8em;
            color: hsl(0, 0%, 70%);
          `}
        >
          Helmet
        </h2>
        <p
          css={css`
            ${tw`p-0 mt-auto`}
            font-size: .8em;
            color: hsl(0, 0%, 70%);
          `}
        >
          Layers of leather were boiled and molded to create this rugged cap. It still smells a bit
          of tannins.{' '}
        </p>
        <section
          css={css`
            ${tw`relative mt-auto`}
            padding: 40px 100px 40px 60px;
            margin-left: -59px;
            margin-right: -59px;
            background: hsla(0, 0%, 0%, 0.3);
            background: linear-gradient(90deg, #0001 0%, #0003 30%, #0003 60%, #0001 100%);

            :before {
              ${tw`absolute block`}
              content: '';
              width: 100%;
              height: 2px;
              left: 0;
              bottom: 0;
              background: red;
              background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 20%,
                rgba(255, 255, 255, 0.2) 80%,
                rgba(255, 255, 255, 0) 100%
              );
              box-shadow: 0 -2px 2px #000a;
            }

            :after {
              ${tw`absolute block`}
              content: '';
              width: 100%;
              height: 2px;
              left: 0;
              top: 0;
              background: red;
              background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 20%,
                rgba(255, 255, 255, 0.2) 80%,
                rgba(255, 255, 255, 0) 100%
              );
              box-shadow: 0 2px 2px #000a;
            }
          `}
        >
          <h2
            css={css`
              ${tw`m-0`}
              font-size: .6em;
              color: hsl(0, 0%, 70%);
            `}
          >
            The wearer of this item gains:
          </h2>
          <div
            css={css`
              ${tw`flex`}
              font-size: .8em;
            `}
          >
            <span>Dexterity saving throws</span>
            <span
              css={css`
                ${tw`ml-auto`}
              `}
            >
              +1
            </span>
          </div>
        </section>

        <footer
          css={css`
            ${tw`relative flex items-center justify-between mt-auto`}
            padding: 20px 60px;
            margin-left: -59px;
            margin-right: -59px;
            background: hsla(0, 0%, 0%, 0.3);
            background: linear-gradient(90deg, #0001 0%, #0003 30%, #0003 60%, #0001 100%);
            font-size: 0.65em;

            :after {
              ${tw`absolute block`}
              content: '';
              width: 100%;
              height: 2px;
              left: 0;
              top: 0;
              background: red;
              background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 20%,
                rgba(255, 255, 255, 0.2) 80%,
                rgba(255, 255, 255, 0) 100%
              );
              box-shadow: 0 2px 2px #000a;
            }
          `}
        >
          <div
            css={css`
              ${tw`flex items-center space-x-4`}
            `}
          >
            <WeightIcon></WeightIcon> <span>1</span>
          </div>
          <div
            css={css`
              margin-right: -30px;
            `}
          >
            Not Equipped
          </div>
          <div
            css={css`
              ${tw`flex items-center space-x-4`}
            `}
          >
            <span>100</span>
            <CoinIcon></CoinIcon>
          </div>
        </footer>
      </div>
      <svg viewBox="0 0 530 421" fill="none">
        <path
          d="M6 4H525V414H280L265 421L250 414H6V0"
          css={css`
            fill: hsla(26, 0%, 18%, 0.85);
            box-shadow: 10px 10px black;
          `}
        />
        <g>
          <path
            d="M16 2L514.5 1.5C517.333 1.5 523.9 1.20001 527.5 0C524.833 1.5 518.5 4.5 514.5 4.5H16C12 4.5 5.66667 1.5 3 0C6.6 1.20001 13.1667 2 16 2Z"
            fill="url(#paint0_linear)"
            css={css`
              filter: drop-shadow(0 1px 1px #000d);
            `}
          />
          <path
            d="M6 16C6 8 2.33333 5.16667 0.5 2.5C4 8.5 3.5 13.6667 3.5 16C3.66667 144.5 4.37048 402.813 4 408C3.57143 414 8.5 415 12.5 415H238.5C248 415 258.5 417 265.5 420.5C258 415.5 247 412 238.5 412H12.5C8 412 7 412 7 408C7 280 6 21 6 16Z"
            fill="url(#paint1_linear)"
            css={css`
              filter: drop-shadow(1px -1px 1px #000d);
            `}
          />
          <path
            d="M524.5 16C524.5 8 528.167 5.16667 530 2.5C526.5 8.5 527 13.6667 527 16C526.833 144.5 526.13 402.813 526.5 408C526.929 414 522 415 518 415H292C282.5 415 272 417 265 420.5C272.5 415.5 283.5 412 292 412H518C522.5 412 523.7 412 523.5 408C523.5 280 524.5 21 524.5 16Z"
            fill="url(#paint2_linear)"
            css={css`
              filter: drop-shadow(-1px -1px 1px #000d);
            `}
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="2.50379"
            y1="2.25"
            x2="522.042"
            y2="2.24959"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5B3D23" />
            <stop offset="0.510417" stop-color="#8B6946" />
            <stop offset="1" stop-color="#5B3D23" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="0.249294"
            y1="211.5"
            x2="262.742"
            y2="211.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5B3D23" />
            <stop offset="1" stop-color="#8B6946" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="530.251"
            y1="211.5"
            x2="267.758"
            y2="211.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5B3D23" />
            <stop offset="1" stop-color="#8B6946" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WeightIcon() {
  return (
    <svg
      width="30"
      viewBox="0 0 19 19"
      fill="currentColor"
      css={css`
        stroke-linejoin: round;
        filter: drop-shadow(1px 3px 3px #000d);
      `}
    >
      <defs>
        <linearGradient
          id="weight_linear"
          x1="20"
          y1="21"
          x2="31"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#fff" />
          <stop offset="50%" stop-color="#000" />
        </linearGradient>
      </defs>
      <path
        d="M7 9H3.6L1.1 15.8C.6 17.1 1.6 18.5 3 18.5H16.3C17.7 18.5 18.6 17.1 18.1 15.8L15.6 9H12.4A4.8 4.8 0 107 9M7.2 5A1 1 0 0012.2 5A1 1 0 007.2 5Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg
      width="30"
      viewBox="0 0 24 23"
      css={css`
        fill: currentColor;
        filter: drop-shadow(1px 3px 3px #000d);
      `}
    >
      <mask id="mask">
        <rect width="24" height="23"></rect>
        <path
          d="M16 17l-10-1.5c3.5-3.5 3.5-8.2 2.5-10.5l9 1.5c-3.5 3-2 8.2-1.5 10.5z"
          fill="none"
          stroke="black"
        />
      </mask>
      <path
        d="M1 18V15C7.4 12.2 5.66667 6.83333 4 4.5V1L23.5 4V6.5C16.3 9.7 19.1667 16.1667 21.5 19V22L1 18Z"
        mask="url(#mask)"
      />
    </svg>
  );
}

export default IndexPage;
