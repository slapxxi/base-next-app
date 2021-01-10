import { css } from '@emotion/react';
import { clamp } from 'lodash';
import { Children, ReactNode, useEffect, useRef } from 'react';
import { animated, useSprings } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import tw from 'twin.macro';

export interface CarouselProps {
  children?: ReactNode;
  activeIndex?: number;
  itemWidth?: number;
}

export let Carousel: React.FC<CarouselProps> = (props) => {
  let { children, activeIndex, itemWidth = 275 } = props;
  let containerRef = useRef<HTMLDivElement>(null);
  let offsetRef = useRef(0);
  let [springs, set] = useSprings(Children.count(children), (i) => ({
    x: 0,
    config: { friction: 18 + i },
  }));
  let offset = 0;
  let bind = useGesture(
    {
      onDragEnd: (status) => {
        let {
          velocity,
          direction: [dx],
        } = status;
        if (velocity > 1) {
          offsetRef.current += itemWidth * lerp(1, 10, velocity / 20) * dx;
        }
        offsetRef.current += offset;
        offsetRef.current = clamp(
          offsetRef.current,
          -itemWidth * (Children.count(children) - 1),
          0,
        );
        set({ x: offsetRef.current });
      },
      onDrag: (status) => {
        let {
          movement: [mx],
        } = status;
        offset = mx;
        set({ x: offsetRef.current + mx });
      },
    },
    {
      drag: { threshold: 10 },
    },
  );

  useEffect(() => {
    if (activeIndex !== undefined) {
      offsetRef.current = (activeIndex % Children.count(children)) * -itemWidth;
      set({ x: offsetRef.current });
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      css={css`
        ${tw`flex space-x-2 select-none`}
        overflow-x: hidden;
        touch-action: none;
      `}
      {...bind()}
    >
      {Children.map(children, (child, index) => (
        <animated.div
          css={css`
            flex: none;
            will-change: transform;
          `}
          style={{ transform: springs[index].x.interpolate((v) => `translateX(${v}px)`) }}
        >
          {child}
        </animated.div>
      ))}
    </div>
  );
};

function lerp(min: number, max: number, progress: number): number {
  return (1 - progress) * min + progress * max;
}
