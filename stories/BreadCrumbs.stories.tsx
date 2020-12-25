import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BreadCrumbs, BreadCrumbsProps } from '../components/BreadCrumbs';

let Template: Story<BreadCrumbsProps> = (args: any) => (
  <BreadCrumbs {...args}>
    {/* <div>First</div>
    <div>Second</div>
    <div>Third</div> */}
  </BreadCrumbs>
);

export const Primary = Template.bind({});
Primary.args = {
  children: [<div>First</div>, <div>Second</div>, <div>Third</div>],
};

export const WithSingleItem = Template.bind({});
WithSingleItem.args = {
  children: <div>Hello</div>,
};

export default {
  title: 'Breadcrumbs',
  component: BreadCrumbs,
};
