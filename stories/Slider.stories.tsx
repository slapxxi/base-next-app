import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Slider, SliderProps } from '../components/Slider';

let Template: Story<SliderProps> = (args: any) => <Slider {...args}></Slider>;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Slider',
};

export default {
  title: 'Slider',
  component: Slider,
};
