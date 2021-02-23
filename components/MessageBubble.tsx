import { css } from '@emotion/react';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import tw from 'twin.macro';

export interface MessageBubbleProps {
  children?: ReactNode;
}

export let MessageBubble: React.FC<MessageBubbleProps> = (props) => {
  let { children, ...rest } = props;
  let [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  let containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let el = containerRef.current;

    if (el) {
      let rect = el.getBoundingClientRect();
      setDimensions({ width: ~~rect.width, height: ~~rect.height });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      css={css`
        ${tw`box-border relative inline-flex p-6`}
      `}
      {...rest}
    >
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        css={css`
          ${tw`absolute`}
          top: 0;
          left: 0;
          fill: hsl(35, 5%, 99%);
          filter: drop-shadow(2px 3px 6px hsla(35, 20%, 10%, 0.25));
        `}
      >
        <path d={generatePath(dimensions.width, dimensions.height)} />
      </svg>
      <div
        css={css`
          ${tw`relative`}
        `}
      >
        {children}
      </div>
    </div>
  );
};

function generatePath(width: number, height: number): string {
  const MIN_HEIGHT = Math.min(50, height / 2);
  return `
    M${MIN_HEIGHT} 0
    Q0 0 0 ${MIN_HEIGHT}
    V${height - MIN_HEIGHT}
    Q0 ${height} ${MIN_HEIGHT} ${height}
    H${width - MIN_HEIGHT}
    Q${width - MIN_HEIGHT / 1.5} ${height} ${width - MIN_HEIGHT / 2} ${height - MIN_HEIGHT / 10}
    L${width - MIN_HEIGHT / 10} ${height}
    L${width - MIN_HEIGHT / 6.5} ${height - MIN_HEIGHT / 2.3}
    Q${width} ${height - MIN_HEIGHT / 1.5} ${width} ${height - MIN_HEIGHT}
    V${MIN_HEIGHT}
    Q${width} 0 ${width - MIN_HEIGHT} 0
    `;
}
