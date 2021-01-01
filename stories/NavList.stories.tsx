import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { NavList, NavListProps } from '../components/NavList';

let Template: Story<NavListProps> = (args: any) => <NavList {...args}></NavList>;

export const Primary = Template.bind({});

Primary.args = {
  children: [<li>First</li>, <li>Second</li>, <li>Third</li>],
};

export const WithTitle = Template.bind({});

WithTitle.args = {
  children: [<li>First</li>, <li>Second</li>, <li>Third</li>],
  title: 'List Title',
};

export default {
  title: 'NavList',
  component: NavList,
};
