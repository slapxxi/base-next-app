import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Button } from '../components/Button';

let Template: Story<ComponentProps<typeof Button>> = (args: any) => <Button {...args}></Button>;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Lifted = Template.bind({});

Lifted.args = {
  variant: 'lifted',
  children: 'Lifted Button',
};

export const Small = Template.bind({});

Small.args = {
  variant: 'primary',
  size: 'sm',
  children: 'Small Button',
};

export const Medium = Template.bind({});

Medium.args = {
  variant: 'primary',
  size: 'md',
  children: 'Medium Button',
};

export const Large = Template.bind({});

Large.args = {
  variant: 'primary',
  size: 'lg',
  children: 'Large Button',
};

export default {
  title: 'Button',
  component: Button,
};
