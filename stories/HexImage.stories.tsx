import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { HexImage, HexImageProps } from '../components/HexImage';

let Template: Story<HexImageProps> = (args) => <HexImage {...args}></HexImage>;

export const Base = Template.bind({});

Base.args = {};

export default {
  title: 'HexImage',
  component: HexImage,
  args: {
    src: '/img/item.png',
  },
};
