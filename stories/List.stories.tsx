import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { List, ListProps } from '../components/List';

let Template: Story<ListProps> = (args: any) => <List {...args}></List>;

export const Base = Template.bind({});

Base.args = {
  children: [<li>First</li>, <li>Second</li>, <li>Third</li>],
};

export default {
  title: 'List',
  component: List,
};
