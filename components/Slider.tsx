import { css } from '@emotion/react';
import { Children, ReactNode, useRef, useState } from 'react';
import { animated, useSprings } from 'react-spring';
import tw from 'twin.macro';

export interface SliderProps {
  children?: ReactNode;
  activeIndex?: number;
  onChange?: (index: number) => void;
  debug?: boolean;
}

export let Slider: React.FC<SliderProps> = (props) => {
  let { children, debug = false } = props;
  let childrenCount = Children.count(children);
  let [activeIndex, setActiveIndex] = useState(0);
  let indexRef = useRef(activeIndex);
  let [springs, setSprings] = useSprings(childrenCount, (i) => ({
    x: (i - activeIndex) * 100,
    config: { tension: 400, friction: 38, precision: 1 },
  }));

  function handlePrev() {
    let nextIndex = (childrenCount + (activeIndex - 1)) % childrenCount;

    setSprings((i) => {
      let immediate = !(i === activeIndex || i === nextIndex);

      if (activeIndex === 0) {
        if (i === childrenCount - 1) {
          return {
            to: [
              { x: -100, immediate: true },
              { x: 0, immediate: false },
            ],
          };
        }
        return {
          to: [
            { x: (i - (activeIndex - 1)) * 100, immediate: immediate },
            { x: (i - nextIndex) * 100, immediate: true },
          ],
        };
      } else {
        return { x: (i - nextIndex) * 100, immediate: false };
      }
    });

    setActiveIndex(nextIndex);
  }

  function handleNext() {
    let nextIndex = (childrenCount + (activeIndex + 1)) % childrenCount;

    setSprings((i) => {
      let immediate = !(i === activeIndex || i === nextIndex);
      if (activeIndex === childrenCount - 1) {
        if (i === 0) {
          return {
            to: [
              { x: 100, immediate: true },
              { x: 0, immediate: false },
            ],
          };
        }
        return {
          to: [
            { x: (i - (activeIndex + 1)) * 100, immediate: immediate },
            { x: (i - nextIndex) * 100, immediate: true },
          ],
        };
      } else {
        return { x: (i - nextIndex) * 100, immediate: false };
      }
    });

    setActiveIndex(nextIndex);
  }

  return (
    <>
      {debug && (
        <div>
          <div>Children: {childrenCount}</div>
          <div>Active Index: {activeIndex}</div>
          <div>IndexRef: {indexRef.current}</div>
        </div>
      )}
      <div
        css={css`
          ${tw`relative`}
          height: 300px;
          overflow-x: hidden;
        `}
      >
        {Children.map(children, (child, i) => (
          <animated.div
            key={i}
            css={css`
              ${tw`relative absolute`}
              will-change:transform;

              ${debug &&
              css`::after { 
                ${tw`absolute top-2 right-2 bg-black text-white rounded p-1`} 
                content: 'idx(${i})';`}
            `}
            style={{ transform: springs[i].x.interpolate((v) => `translateX(${v}%)`) }}
          >
            {child}
          </animated.div>
        ))}
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};
