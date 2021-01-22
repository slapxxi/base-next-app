import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { Button } from '../components/Button';
import { ImageCard, ImageCardProps } from '../components/ImageCard';

let Template: Story<ImageCardProps> = (args: any) => <ImageCard {...args}></ImageCard>;

export const Primary = Template.bind({});

Primary.args = {
  image: '/img/slider1.jpg',
};

export const WithTitle = Template.bind({});

WithTitle.args = {
  image: '/img/slider1.jpg',
  title: 'Atlas Concorde в наличии в шоу-руме',
};

export const WithButton = Template.bind({});

WithButton.args = {
  image: '/img/slider1.jpg',
  button: (
    <Button variant="lifted" icon={<ArrowRight size={17}></ArrowRight>}>
      Посмотреть товары
    </Button>
  ),
};

export const WithAll = Template.bind({});

WithAll.args = {
  image: '/img/slider1.jpg',
  title: 'Atlas Concorde в наличии в шоу-руме',
  button: (
    <Button variant="lifted" icon={<ArrowRight size={17}></ArrowRight>}>
      Посмотреть товары
    </Button>
  ),
};

export default {
  title: 'ImageCard',
  component: ImageCard,
};
