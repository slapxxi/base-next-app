import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Carousel, CarouselProps } from '../components/Carousel';
import { ItemCard } from '../components/ItemCard';
import { RetailItem } from '../lib/types';

let item: RetailItem = {
  id: '1',
  title: 'Фибра армирующая (стекловолокно) добавка к строительным смесям 100...',
  img: '/img/item.png',
  price: 9900,
  previousPrice: 12900,
  tags: [],
  liked: false,
};

let Template: Story<CarouselProps> = (args: any) => <Carousel {...args}></Carousel>;

let CarouselItem = () => {
  return <ItemCard item={item}></ItemCard>;
};

export const Primary = Template.bind({});

Primary.args = {};

export const WithControls = (args) => {
  let [activeIndex, setActiveIndex] = useState(0);

  function handlePrev() {
    setActiveIndex(activeIndex - 1);
  }

  function handleNext() {
    setActiveIndex(activeIndex + 1);
  }

  return (
    <div>
      <Carousel {...args} activeIndex={activeIndex}></Carousel>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

WithControls.args = {};

export default {
  title: 'Carousel',
  component: Carousel,
  args: {
    children: [
      <CarouselItem></CarouselItem>,
      <CarouselItem></CarouselItem>,
      <CarouselItem></CarouselItem>,
      <CarouselItem></CarouselItem>,
      <CarouselItem></CarouselItem>,
      <CarouselItem></CarouselItem>,
      <CarouselItem></CarouselItem>,
      <CarouselItem></CarouselItem>,
    ],
  },
};
