import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Tag, TagProps } from '../components/Tag';

let Template: Story<TagProps> = (args: any) => <Tag {...args}></Tag>;

export const Primary = Template.bind({});

Primary.args = {
  children: 'бестселлер',
};

export const Hot = Template.bind({});

Hot.args = {
  hot: true,
  children: 'хит продаж',
};

export default {
  title: 'Tag',
  component: Tag,
};
