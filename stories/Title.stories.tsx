import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Title, TitleProps } from '../components/Title';

let Template: Story<TitleProps> = (args: any) => <Title {...args}></Title>;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Title',
};

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  children: 'Title',
};

export const Medium = Template.bind({});

Medium.args = {
  size: 'md',
  children: 'Title',
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
  children: 'Title',
};

export default {
  title: 'Title',
  component: Title,
};
