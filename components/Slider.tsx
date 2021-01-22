import { ReactNode } from 'react';

export interface SliderProps {
  children?: ReactNode;
  activeIndex?: number;
  itemWidth?: number;
}

export let Slider: React.FC<SliderProps> = (props) => {
  let { children } = props;
  return <div>{children}</div>;
};
