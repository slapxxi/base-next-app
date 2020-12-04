import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { FormattedDate } from '../components/FormattedDate';

let Template: Story<ComponentProps<typeof FormattedDate>> = (args: any) => (
  <FormattedDate {...args}></FormattedDate>
);

export const Main = Template.bind({});

Main.args = {
  date: new Date(),
};

export default {
  title: 'Date',
  component: FormattedDate,
};
