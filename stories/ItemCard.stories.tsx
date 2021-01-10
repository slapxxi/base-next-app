import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ItemCard, ItemCardProps } from '../components/ItemCard';
import { RetailItem } from '../lib/types';

let item: RetailItem = {
  id: '1',
  title: 'Фибра армирующая (стекловолокно) добавка к строительным смесям 100...',
  img: '/img/item.png',
  price: 9900,
  previousPrice: 12900,
  liked: true,
  tags: [],
};

let Template: Story<ItemCardProps> = (args: any) => {
  let [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked((l) => !l);
  }

  return <ItemCard {...args} item={{ ...args.item, liked }} onLike={handleLike}></ItemCard>;
};

export const Base = Template.bind({});

Base.args = {
  item,
};

export default {
  title: 'Item Card',
  component: ItemCard,
};
