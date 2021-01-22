import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { BadgeButton, BadgeButtonProps } from '../components/BadgeButton';

let icon = <ArrowRight></ArrowRight>;

let Template: Story<BadgeButtonProps> = (args: any) => <BadgeButton {...args}></BadgeButton>;

export const Primary = Template.bind({});

Primary.args = {
  icon,
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  icon,
  variant: 'secondary',
};

export const Lifted = Template.bind({});

Lifted.args = {
  icon,
  variant: 'lifted',
};

export const Small = Template.bind({});

Small.args = {
  icon,
  variant: 'primary',
  size: 'sm',
};

export const Medium = Template.bind({});

Medium.args = {
  icon,
  variant: 'primary',
  size: 'md',
};

export const Large = Template.bind({});

Large.args = {
  icon,
  variant: 'primary',
  size: 'lg',
};

export const Hover = Template.bind({});

Hover.args = {
  icon,
  variant: 'lifted',
  size: 'md',
  hover: true,
};

export default {
  title: 'Badge Button',
  component: BadgeButton,
};
