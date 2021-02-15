import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { BadgeButton, BadgeButtonProps } from '../components/BadgeButton';

let icon = <ArrowRight></ArrowRight>;

let Template: Story<BadgeButtonProps> = (args) => <BadgeButton {...args}></BadgeButton>;

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
};

export const Lifted = Template.bind({});

Lifted.args = {
  variant: 'lifted',
};

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});

Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
};

export const Hover = Template.bind({});

Hover.args = {
  hover: true,
};

export default {
  title: 'BadgeButton',
  component: BadgeButton,
  args: {
    variant: 'primary',
    size: 'md',
    hover: false,
    icon,
  },
} as Meta;
