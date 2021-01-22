import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { CategoryCard, CategoryCardProps } from '../components/CategoryCard';

let Template: Story<CategoryCardProps> = (args: any) => <CategoryCard {...args}></CategoryCard>;

export const Tiles = Template.bind({});

Tiles.args = { category: 'tiles' };

export const Mixes = Template.bind({});

Mixes.args = { category: 'mixes' };

export default {
  title: 'CategoryCard',
  component: CategoryCard,
};
