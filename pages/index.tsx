import { css } from '@emotion/react';
import { NextPage } from 'next';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animated, interpolate, useSpring } from 'react-spring';
import tw from 'twin.macro';

let IndexPage: NextPage = () => {
  return (
    <div
      css={css`
        ${tw`flex items-center h-full`}
        margin-top: -40px;
      `}
    >
      <Border
        data={{
          title: 'Leather Helmet',
          type: 'Helmet',
          description: `Layers of leather were boiled and molded to create this rugged cap. It still smells a bit of tannins.`,
        }}
      ></Border>
      <Border
        data={{
          title: 'Leather Helmet',
          type: 'Helmet',
          description: `Layers of leather were boiled and molded to create this rugged cap. It still smells a bit of tannins.`,
        }}
      ></Border>
    </div>
  );
};

function Border(props) {
  let { data } = props;
  let [mounted, setMounted] = useState(false);
  let [size, setSize] = useState({ width: 0, height: 0 });
  let [active, setActive] = useState(true);
  let spring = useSpring({ opacity: active ? 1 : 0, scale: active ? 1 : 0, y: active ? 0 : 500 });
  let containerRef = useRef(null);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  useLayoutEffect(() => {
    let el = containerRef.current;

    if (el && !mounted) {
      let rect = el.getBoundingClientRect();
      setSize(() => ({ width: rect.width, height: rect.height }));
    }
  }, [mounted]);

  useEffect(() => {
    function handler() {
      setActive((a) => !a);
    }

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <animated.div
      ref={containerRef}
      css={css`
        ${tw`relative mx-auto`}
        max-width: 760px;
        will-change: transform;
      `}
      style={{
        opacity: spring.opacity,
        transform: interpolate(
          [spring.scale, spring.y],
          (v, y) => `scale(${v}) translateY(${y}px)`,
        ),
      }}
    >
      <div
        css={css`
          ${tw`box-border flex flex-col p-12 pb-0`}
          ${mounted && tw`absolute`}
          min-height: 600px;
          top: 0;
          left: 0;
          font-family: 'Crimson Text', serif;
          font-size: 40px;
          text-shadow: 2px 2px 1px black;

          @supports (clip-path: polygon(0 0)) {
          }
        `}
      >
        <img
          src="/img/helmet.png"
          width="250"
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
          {data.title}
        </h1>
        <h2
          css={css`
            ${tw`p-0 m-0`}
            font-size: .8em;
            color: hsl(0, 0%, 70%);
          `}
        >
          {data.type}
        </h2>
        <p
          css={css`
            ${tw`p-0 mt-auto`}
            font-size: .8em;
            color: hsl(0, 0%, 70%);
          `}
        >
          {data.description}
        </p>
        <section
          css={css`
            ${tw`relative mt-auto`}
            padding: 40px 40px 40px 40px;
            margin-left: -40px;
            margin-right: -40px;
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
            padding: 20px 40px 30px;
            margin-left: -40px;
            margin-right: -40px;
            background: hsla(0, 0%, 0%, 0.3);
            background: linear-gradient(90deg, #0001 0%, #0003 30%, #0003 60%, #0001 100%);
            font-size: 0.65em;

            @supports (clip-path: polygon(0 0)) {
              clip-path: polygon(
                0 0,
                100% 0,
                100% calc(100% - 10px),
                calc(50% + 15px) calc(100% - 10px),
                50% 100%,
                calc(50% - 15px) calc(100% - 10px),
                0 calc(100% - 10px)
              );
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

      {mounted && (
        <svg
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          fill="none"
        >
          <path
            d="M6 4H525V414H280L265 420L250 414H6V0"
            d={generateBox(size)}
            css={css`
              fill: hsla(26, 0%, 18%, 0.85);
              box-shadow: 10px 10px black;
            `}
          />
          <g>
            <path
              d="M16 2L514.5 1.5C517.333 1.5 523.9 1.20001 527.5 0C524.833 1.5 518.5 4.5 514.5 4.5H16C12 4.5 5.66667 1.5 3 0C6.6 1.20001 13.1667 2 16 2Z"
              fill="url(#paint0_linear)"
              d={generateTop(size.width)}
              css={css`
                filter: drop-shadow(0 1px 1px #000d);
              `}
            />
            <path
              id="left"
              d="M6 16C6 8 2.33333 5.16667 0.5 2.5C4 8.5 3.5 13.6667 3.5 16C3.66667 144.5 4.37048 402.813 4 408C3.57143 414 8.5 415 12.5 415H238.5C248 415 258.5 417 265.5 420.5C258 415.5 247 412 238.5 412H12.5C8 412 7 412 7 408C7 280 6 21 6 16Z"
              d={generateLeft({ width: size.width / 2, height: size.height })}
              fill="url(#paint1_linear)"
              css={css`
                filter: drop-shadow(1px -1px 1px #000d);
              `}
            />
            <use href="#left" transform={`translate(${size.width} 0) scale(-1, 1)`}></use>
            {/* <path
            d="M524.5 16C524.5 8 528.167 5.16667 530 2.5C526.5 8.5 527 13.6667 527 16C526.833 144.5 526.13 402.813 526.5 408C526.929 414 522 415 518 415H292C282.5 415 272 417 265 420.5C272.5 415.5 283.5 412 292 412H518C522.5 412 523.7 412 523.5 408C523.5 280 524.5 21 524.5 16Z"
            fill="url(#paint2_linear)"
            css={css`
              filter: drop-shadow(-1px -1px 1px #000d);
            `}
          /> */}
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
              <stop stopColor="#5B3D23" />
              <stop offset="0.510417" stopColor="#8B6946" />
              <stop offset="1" stopColor="#5B3D23" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="0.249294"
              y1="211.5"
              x2="262.742"
              y2="211.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B3D23" />
              <stop offset="1" stopColor="#8B6946" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="530.251"
              y1="211.5"
              x2="267.758"
              y2="211.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B3D23" />
              <stop offset="1" stopColor="#8B6946" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </animated.div>
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
          <stop offset="0%" stopColor="#fff" />
          <stop offset="50%" stopColor="#000" />
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

function generateLeft(size: { width: number; height: number }): string {
  const CURVE = 15;
  const WIDTH = 4;
  const OFFSET = 5;

  return `
  M${WIDTH * 2 + 1} ${CURVE}
  Q${WIDTH * 2 + 1} ${CURVE / 2 + OFFSET} 1 ${OFFSET}
  Q${WIDTH} ${CURVE / 2 + OFFSET} ${WIDTH} ${CURVE + OFFSET}
  V${size.height + OFFSET - WIDTH * 4}
  q0 ${WIDTH * 2} ${WIDTH * 2} ${WIDTH * 2}
  H${size.width - CURVE}
  q${CURVE / 2} 0 ${CURVE} ${WIDTH}
  q${-CURVE / 2} ${-WIDTH * 2} ${-CURVE} ${-WIDTH * 2}
  H${WIDTH * 3}
  Q${WIDTH * 2} ${size.height + OFFSET - WIDTH * 3} ${WIDTH * 2} ${size.height + OFFSET - WIDTH * 4}
  `;
}

function generateBox(size: { width: number; height: number }): string {
  return `
  M6 4
  H${size.width - 6}
  V${size.height - 7}
  H${size.width / 2 + 30}
  L${size.width / 2} ${size.height}
  L${size.width / 2 - 30} ${size.height - 7}
  H6
  V0`;
}

function generateTop(width: number): string {
  const OFFSET = 15;
  const HEIGHT = 6;

  if (width < OFFSET * 2 + 20) {
    console.warn(`Width cannot be less than ${OFFSET * 2 + 20}: ${width}`);
  }

  return `
  M${OFFSET} 2
  H${width - OFFSET}
  Q${width - OFFSET / 2} 2 ${width} 0
  Q${width - OFFSET / 2} ${HEIGHT} ${width - OFFSET} ${HEIGHT}
  H${OFFSET}
  Q${OFFSET / 2} ${HEIGHT} 0 0
  `;
}

export default IndexPage;
