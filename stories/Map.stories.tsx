import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Map, MapProps } from '../components/Map';

let Template: Story<MapProps> = (args: any) => <Map {...args}></Map>;

export const Main = Template.bind({});

Main.args = {};

export default {
  title: 'Map',
  component: Map,
};
