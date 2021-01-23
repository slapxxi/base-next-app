import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ImageCard } from '../components/ImageCard';
import { Slider, SliderProps } from '../components/Slider';

let Template: Story<SliderProps> = (args: any) => {
  let [activeIndex, setActiveIndex] = useState(0);

  function handleChange(index: number) {
    setActiveIndex(index);
  }

  return (
    <Slider activeIndex={activeIndex} onChange={handleChange} {...args}>
      <ImageCard image="/img/slider1.jpg" title="First"></ImageCard>
      <ImageCard
        image="/img/slider1.jpg"
        title="Second"
        button={
          <Button variant="lifted" size="sm">
            Proceed
          </Button>
        }
      ></ImageCard>
      <ImageCard
        image="/img/slider1.jpg"
        title="Third"
        button={
          <Button variant="lifted" size="sm">
            Proceed
          </Button>
        }
      ></ImageCard>
      <ImageCard
        image="/img/slider1.jpg"
        title="Fourth"
        button={
          <Button variant="lifted" size="sm">
            Proceed
          </Button>
        }
      ></ImageCard>
    </Slider>
  );
};

export const Main = Template.bind({});

Main.args = {};

export default {
  title: 'Slider',
  component: Slider,
};
