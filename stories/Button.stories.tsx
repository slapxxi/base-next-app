import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { BadgeButton } from '../components/BadgeButton';
import { Button, ButtonProps } from '../components/Button';

let Template: Story<ButtonProps> = (args: any) => <Button {...args}></Button>;

export const Primary = Template.bind({});

Primary.args = {};

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

Medium.args = {};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  icon: <ArrowRight size={16}></ArrowRight>,
};

export const WithBadgeButton = Template.bind({});

WithBadgeButton.args = {
  badgeButton: <BadgeButton icon={<ArrowRight></ArrowRight>}></BadgeButton>,
};

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};
