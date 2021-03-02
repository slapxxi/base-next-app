import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ArrowRight, Mail } from 'react-feather';
import { BadgeButton } from '../components/BadgeButton';
import { Input, InputProps } from '../components/Input';

let Template: Story<InputProps> = (args: any) => <Input {...args}></Input>;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'example',
};

export const With_Badge_Button = Template.bind({});

With_Badge_Button.args = {
  size: 'md',
  badgeButton: (
    <BadgeButton icon={<ArrowRight></ArrowRight>} onClick={() => alert('click')}></BadgeButton>
  ),
  placeholder: 'your@mail.com',
};

export const With_Icon = Template.bind({});

With_Icon.args = {
  size: 'md',
  icon: <Mail size={16}></Mail>,
  placeholder: 'your@mail.com',
};

export const With_Icon_And_Badge_Button = Template.bind({});

With_Icon_And_Badge_Button.args = {
  size: 'md',
  icon: <Mail size={16}></Mail>,
  badgeButton: <BadgeButton icon={<ArrowRight></ArrowRight>}></BadgeButton>,
  placeholder: 'your@mail.com',
};

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  placeholder: 'your@mail.com',
};

export const Medium = Template.bind({});

Medium.args = {
  size: 'md',
  placeholder: 'your@mail.com',
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
  placeholder: 'your@mail.com',
};

export default {
  title: 'Input',
  component: Input,
};
