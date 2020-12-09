import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Logo, LogoProps } from '../components/Logo';

let Template: Story<LogoProps> = (args: any) => <Logo {...args}></Logo>;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
};

export default {
  title: 'Logo',
  component: Logo,
  decorators: [
    (Story: any) => (
      <div style={{ background: '#bbb', padding: 10 }}>
        <Story></Story>
      </div>
    ),
  ],
};
