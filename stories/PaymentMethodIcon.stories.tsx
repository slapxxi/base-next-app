import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { PaymentMethodIcon, PaymentMethodIconProps } from '../components/PaymentMethodIcon';

let Template: Story<PaymentMethodIconProps> = (args: any) => (
  <PaymentMethodIcon {...args}></PaymentMethodIcon>
);

export const Main = Template.bind({});

Main.args = {
  method: 'gpay',
};

export const Monotone = Template.bind({});

Monotone.args = {
  method: 'gpay',
  type: 'monotone',
};

export default {
  title: 'PaymentMethodIcon',
  component: PaymentMethodIcon,
};
