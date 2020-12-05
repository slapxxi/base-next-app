import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { BadgeButton } from '../components/BadgeButton';
import { Button, ButtonProps } from '../components/Button';

let Template: Story<ButtonProps> = (args: any) => <Button {...args}></Button>;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Button',
};

export const Lifted = Template.bind({});

Lifted.args = {
  variant: 'lifted',
  children: 'Button',
};

export const Small = Template.bind({});

Small.args = {
  variant: 'primary',
  size: 'sm',
  children: 'Button',
};

export const Medium = Template.bind({});

Medium.args = {
  variant: 'primary',
  size: 'md',
  children: 'Button',
};

export const Large = Template.bind({});

Large.args = {
  variant: 'primary',
  size: 'lg',
  children: 'Button',
};

export const With_Badge_Button = Template.bind({});

With_Badge_Button.args = {
  variant: 'primary',
  size: 'md',
  badgeButton: <BadgeButton icon={<ArrowRight></ArrowRight>}></BadgeButton>,
  children: 'Proceed with Caution',
};

export default {
  title: 'Button',
  component: Button,
};
