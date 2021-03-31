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
    </div>
  );
};

function Border(props: any) {
  let { data, ...rest } = props;
  let [mounted, setMounted] = useState(false);
  let [size, setSize] = useState({ width: 100, height: 100 });
  let [active, setActive] = useState(true);
  let spring = useSpring({
    opacity: active ? 1 : 0,
    scale: active ? 1 : 0,
    y: active ? 0 : 500,
  });
  let containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  useLayoutEffect(() => {
    let el = containerRef.current;

    let ro = new ResizeObserver((params) => {
      let { target } = params[0];
      let rect = target.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    });

    if (el && !mounted) {
      let rect = el.getBoundingClientRect();
      setSize(() => ({ width: rect.width, height: rect.height }));
    }

    if (el) {
      ro.observe(el);
    }

    return () => {
      if (el) {
        ro.unobserve(el);
      }
    };
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
        will-change: transform;
        max-width: 900px;
      `}
      style={{
        opacity: spring.opacity,
        transform: interpolate(
          [spring.scale, spring.y],
          (v, y) => `scale(${v}) translateY(${y}px)`,
        ),
      }}
      {...rest}
    >
      <div
        css={css`
          ${tw`box-border flex flex-col p-12 pb-0`}
          /* ${mounted && tw`absolute`} */
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
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
            ${tw`relative flex items-center justify-between`}
            padding: 20px 40px 30px;
            margin-left: -40px;
            margin-right: -40px;
            margin-top: min(30px, 10%);
            background: hsla(0, 0%, 0%, 0.3);
            background: linear-gradient(90deg, #0001 0%, #0003 30%, #0003 60%, #0001 100%);
            font-size: 0.55em;

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
          css={css`
            ${tw`absolute`}
            top: 0;
            z-index: -1;
            will-change: width;
            transform-origin: top right;
          `}
        >
          <path
            d={generateBox(size)}
            css={css`
              fill: hsla(26, 0%, 17%, 0.85);
              box-shadow: 10px 10px black;
            `}
          />
          <path
            fill="url(#paint0_linear)"
            d={generateTop(size.width)}
            css={css`
              filter: drop-shadow(0 1px 1px #000d);
            `}
          />
          <path
            id="left"
            d={generateLeft({ width: size.width / 2, height: size.height })}
            fill="url(#paint1_linear)"
            css={css`
              filter: drop-shadow(1px -1px 1px #000d);
            `}
          />
          <use href="#left" transform={`translate(${size.width} 0) scale(-1, 1)`}></use>
          <defs>
            <linearGradient id="paint0_linear">
              <stop offset="0" stopColor="#5B3D23" />
              <stop offset="0.5" stopColor="#8B6946" />
              <stop offset="1" stopColor="#5B3D23" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1={0}
              y1={size.height / 2}
              x2={size.width / 2}
              y2={size.height}
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
      <path
        d="M7 9H3.6L1.1 15.8C.6 17.1 1.6 18.5 3 18.5H16.3C17.7 18.5 18.6 17.1 18.1 15.8L15.6 9H12.4A4.8 4.8 0 107 9M7.2 5A1 1 0 0012.2 5A1 1 0 007.2 5Z"
        fillRule="evenodd"
        fill="url(#grad)"
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
      <defs>
        <linearGradient id="grad">
          <stop offset="0" stopColor="#ccc" />
          <stop offset="1" stopColor="#666" />
        </linearGradient>
      </defs>
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
        fill="url(#grad)"
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
