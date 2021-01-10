import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ItemCard, ItemCardProps } from '../components/ItemCard';
import { RetailItem } from '../lib/types';

let item: RetailItem = {
  id: '1',
  title: 'Фибра армирующая (стекловолокно) добавка к строительным смесям 100...',
  img: '/img/item.png',
  price: 9900,
  previousPrice: 12900,
  tags: [],
};

let Template: Story<ItemCardProps> = (args: any) => <ItemCard {...args}></ItemCard>;

export const Base = Template.bind({});

Base.args = {
  item,
};

export default {
  title: 'Item Card',
  component: ItemCard,
};
