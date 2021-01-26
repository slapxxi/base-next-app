import { css } from '@emotion/react';
import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ImageCard } from '../components/ImageCard';
import { Slider, SliderProps } from '../components/Slider';

let items = new Array(4).fill(undefined);

let Template: Story<SliderProps> = (args: any) => {
  let [activeIndex, setActiveIndex] = useState(0);

  function handleChange(index: number) {
    setActiveIndex(index);
  }

  return (
    <Slider
      activeIndex={activeIndex}
      onChange={handleChange}
      css={css`
        max-width: 600px;
      `}
      {...args}
    >
      {items.map((_, i) => (
        <ImageCard image="/img/slider1.jpg" title={i.toString()} key={i}></ImageCard>
      ))}
    </Slider>
  );
};

export const Main = Template.bind({});

Main.args = {};

export default {
  title: 'Slider',
  component: Slider,
};
