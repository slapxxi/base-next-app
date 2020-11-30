import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Rating } from '../components/Rating';

let Template: Story<ComponentProps<typeof Rating>> = (args: any) => <Rating {...args}></Rating>;

export const Default = Template.bind({});

export default {
  title: 'Rating',
  component: Rating,
};
