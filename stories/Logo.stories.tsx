import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Logo, LogoProps } from '../components/Logo';

let Template: Story<LogoProps> = (args) => <Logo {...args}></Logo>;

export const Default = Template.bind({});

export const Color = Template.bind({});

Color.args = {
  type: 'color',
};

export const Monotone = Template.bind({});

Monotone.args = {
  type: 'monotone',
};

export default {
  title: 'Logo',
  component: Logo,
  args: {
    type: 'color',
  },
} as Meta;
