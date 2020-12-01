import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useEffect, useState } from 'react';
import { Rating } from '../components/Rating';

let Template: Story<ComponentProps<typeof Rating>> = (args: any) => {
  let [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  function handleChange(value: number) {
    setValue(value);
  }

  return <Rating {...args} value={value} onChange={handleChange}></Rating>;
};

export const Default = Template.bind({});

export const Value = Template.bind({});

Value.args = {
  value: 3,
};

export const Small = Template.bind({});

Small.args = {
  value: 3,
  size: 'sm',
};

export const Medium = Template.bind({});

Medium.args = {
  value: 3,
  size: 'md',
};

export const Large = Template.bind({});

Large.args = {
  value: 3,
  size: 'lg',
};

export const Ten_Stars = Template.bind({});

Ten_Stars.args = {
  value: 8,
  max: 10,
};

export default {
  title: 'Rating',
  component: Rating,
};
