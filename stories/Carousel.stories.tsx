import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Carousel, CarouselProps } from '../components/Carousel';

let Template: Story<CarouselProps> = (args: any) => <Carousel {...args}></Carousel>;

let CarouselItem = (props) => {
  let { bg = 'tomato' } = props;

  return (
    <div
      style={{
        boxSizing: 'border-box',
        background: bg,
        padding: 20,
        borderRadius: 4,
        width: 275,
        height: 275,
      }}
    >
      Item
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  children: [
    <CarouselItem></CarouselItem>,
    <CarouselItem bg="cyan"></CarouselItem>,
    <CarouselItem bg="green"></CarouselItem>,
    <CarouselItem bg="purple"></CarouselItem>,
    <CarouselItem bg="yellowgreen"></CarouselItem>,
    <CarouselItem bg="greenyellow"></CarouselItem>,
  ],
};

export const WithControls = (args) => {
  let [activeIndex, setActiveIndex] = useState(0);

  function handlePrev() {
    setActiveIndex(Math.max(activeIndex - 1, 0));
  }

  function handleNext() {
    setActiveIndex(activeIndex + 1);
  }

  return (
    <div>
      <Carousel {...args} activeIndex={Math.abs(activeIndex % 6)}></Carousel>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

WithControls.args = {
  children: [
    <CarouselItem></CarouselItem>,
    <CarouselItem bg="cyan"></CarouselItem>,
    <CarouselItem bg="green"></CarouselItem>,
    <CarouselItem bg="purple"></CarouselItem>,
    <CarouselItem bg="yellowgreen"></CarouselItem>,
    <CarouselItem bg="greenyellow"></CarouselItem>,
  ],
};

export default {
  title: 'Carousel',
  component: Carousel,
};
