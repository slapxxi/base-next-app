import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Notice, NoticeProps } from '../components/Notice';

let Template: Story<NoticeProps> = (args: any) => <Notice {...args}></Notice>;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Доставим по Екатеринбургу завтра в 15:00',
};

export const With_Title = Template.bind({});
With_Title.args = {
  title: 'Есть в наличии',
  text: 'Доставим по Екатеринбургу завтра в 15:00',
};

export default {
  title: 'Notice',
  component: Notice,
};
