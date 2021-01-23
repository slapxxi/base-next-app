import { css } from '@emotion/react';
import { Children, ReactNode, useMemo, useRef } from 'react';
import { animated, useTransition } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import tw from 'twin.macro';

export interface SliderProps {
  children?: ReactNode;
  activeIndex?: number;
  onChange?: (index: number) => void;
}

enum Direction {
  right = -1,
  left = 1,
}

const generalTransitionConfig = {
  enter: { transform: 'translate3d(0%,0,0) scale(1)', opacity: 1 },
};

export let Slider: React.FC<SliderProps> = (props) => {
  let { children, activeIndex = 0, onChange } = props;
  let childrenCount = Children.count(children);
  let containerRef = useRef<HTMLDivElement>(null);
  let direction = useRef<boolean>(true);
  let transitionConfig = useMemo(() => {
    if (direction.current) {
      return {
        ...generalTransitionConfig,
        from: { transform: 'translate3d(100%,0,0) scale(0.85)', opacity: 0.5 },
        leave: { transform: 'translate3d(-100%,0,0) scale(0.85)', opacity: 0.5 },
      };
    }
    return {
      ...generalTransitionConfig,
      from: { transform: 'translate3d(-100%,0,0) scale(0.85)' },
      leave: { transform: 'translate3d(100%,0,0) scale(0.85)' },
    };
  }, [activeIndex]);
  let transitions = useTransition(activeIndex, (p) => p, transitionConfig);

  let bind = useDrag((params) => {
    let {
      down,
      movement: [mx],
      vxvy: [vx],
    } = params;

    // only if dragging
    if (vx && containerRef.current) {
      let dx: Direction = mx < 0 ? Direction.right : Direction.left;

      if (!down) {
        let adjacentIndex = getAdjacentIndex(activeIndex, dx, childrenCount);
        direction.current = mx < 0 ? true : false;
        setActiveIndex(adjacentIndex);
      }
    }
  });

  function setActiveIndex(index: number) {
    onChange?.(index);
  }

  return (
    <div
      ref={containerRef}
      css={css`
        ${tw`relative`}
        overflow: hidden;
        height: 261px;
        touch-action: none;
      `}
      {...bind()}
    >
      {transitions.map(({ item, key, props }) => (
        <animated.div
          key={key}
          css={css`
            ${tw`absolute`}
            will-change: transform opacity;
          `}
          style={props}
        >
          {Children.toArray(children)[item]}
        </animated.div>
      ))}
    </div>
  );
};

function getAdjacentIndex(activeIndex: number, dx: Direction, childrenCount: number) {
  return (childrenCount + ((activeIndex - dx) % childrenCount)) % childrenCount;
}
