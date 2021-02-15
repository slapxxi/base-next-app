import { css } from '@emotion/react';
import { throttle } from 'lodash';
import { ReactNode, useLayoutEffect, useMemo, useRef, useState } from 'react';
import tw from 'twin.macro';

export interface FrameProps {
  strokeWidth?: number;
  children?: ReactNode;
}

export let Frame: React.FC<FrameProps> = (props) => {
  let { children, strokeWidth = 2 } = props;
  let [bounds, setBounds] = useState({ w: 0, h: 0 });
  let ref = useRef(null);
  let path = useMemo(() => {
    return generatePath(strokeWidth, bounds);
  }, [bounds, strokeWidth]);

  useLayoutEffect(() => {
    let fn = throttle((entries) => {
      for (let entry of entries) {
        let { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
        setBounds({ w: width, h: height });
      }
    }, 300);
    // @ts-ignore
    let ro = new ResizeObserver(fn);
    ro.observe(ref.current);
    return () => ro.unobserve(ref.current) && fn.cancel();
  }, [setBounds]);

  return (
    <div
      ref={ref}
      css={css`
        ${tw`relative z-20`}
        box-sizing: border-box;
        padding: 15px ${50}px 15px 15px;
        min-height: 80px;
      `}
    >
      <svg
        viewBox={`0 0 ${bounds.w} ${bounds.h}`}
        css={css`
          ${tw`absolute top-0 left-0`}
          z-index: -1;
        `}
      >
        <linearGradient x1="11.8748878%" y1="100%" x2="88.1251154%" y2="0%" id="linearGradient-1">
          <stop stopColor="#4656B8" offset="0%" />
          <stop stopColor="#9C02BA" offset="39.9%" />
          <stop stopColor="#5A44BA" offset="74.2%" />
          <stop stopColor="#1485B8" offset="100%" />
        </linearGradient>
        <pattern id="panel-background" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image
            xlinkHref={`https://gedd.ski/img/chat-panel.png`}
            preserveAspectRatio="none"
            x="0"
            y="0"
            opacity=".4"
            width="100%"
            height="100%"
          />
        </pattern>
        <g stroke="url(#linearGradient-1)" fill="url(#panel-background)" strokeWidth={strokeWidth}>
          <path d={path} vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
      {children}
    </div>
  );
};

function generatePath(strokeWidth = 1, bounds = { w: 540, h: 340 }) {
  let path = `
  M${bounds.w - strokeWidth} ${strokeWidth + 15}
  Q${bounds.w - strokeWidth} ${strokeWidth} ${bounds.w - 15}  ${strokeWidth}
  H${strokeWidth + 15}
  Q${strokeWidth} ${strokeWidth} ${strokeWidth} 15
  V${bounds.h - strokeWidth - 15}
  Q${strokeWidth} ${bounds.h - strokeWidth} ${strokeWidth + 15} ${bounds.h - strokeWidth}
  H${bounds.w - 90}
  Q${bounds.w - 80} ${bounds.h - strokeWidth} ${bounds.w - 76} ${bounds.h - strokeWidth - 3}
  L${bounds.w - strokeWidth - 53} ${bounds.h - strokeWidth - 18}
  Q${bounds.w - 51} ${bounds.h - strokeWidth - 20} ${bounds.w - 45} ${bounds.h - strokeWidth - 20}
  H${bounds.w - strokeWidth - 15}
  Q${bounds.w - strokeWidth} ${bounds.h - strokeWidth - 20} ${bounds.w - strokeWidth} ${
    bounds.h - strokeWidth - 35
  }
  Z
  `;
  return path;
}
