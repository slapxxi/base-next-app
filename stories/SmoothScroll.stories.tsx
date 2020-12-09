import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Ipsum } from '../components/Ipsum';
import { SmoothScroll, SmoothScrollProps } from '../components/SmoothScroll';

let Template: Story<SmoothScrollProps> = (args: any) => <SmoothScroll {...args}></SmoothScroll>;

export const Example = Template.bind({});

Example.args = {
  href: '#anchor',
  children: 'Click to Scroll',
};

export default {
  title: 'SmoothScroll',
  component: SmoothScroll,
  decorators: [
    (Story) => {
      return (
        <div>
          <Story></Story>
          <Ipsum repeat={20}></Ipsum>
          <h1 id="anchor">Anchor</h1>
          <Ipsum repeat={2}></Ipsum>
        </div>
      );
    },
  ],
};
