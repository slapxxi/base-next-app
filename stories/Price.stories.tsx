import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Price, PriceProps } from '../components/Price';

let Template: Story<PriceProps> = (args: any) => <Price {...args}></Price>;

export const Base = Template.bind({});

Base.args = {
  value: 9900,
};

export const Previous = Template.bind({});

Previous.args = {
  value: 9900,
  previous: true,
};

export default {
  title: 'Price',
  component: Price,
};
