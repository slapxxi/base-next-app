import { ReactNode } from 'react';

export interface SliderProps {
  children?: ReactNode;
  activeIndex?: number;
  onChange?: (index: number) => void;
}

export let Slider: React.FC<SliderProps> = (props) => {
  return <div>todo</div>;
};
