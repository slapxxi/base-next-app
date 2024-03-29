import { css, keyframes } from '@emotion/react';
import React, { ReactNode } from 'react';
import { Heart } from 'react-feather';
import tw from 'twin.macro';
import { RetailItem } from '../lib/types';
import { Button } from './Button';
import { Price } from './Price';
import { Tag } from './Tag';
import { Title } from './Title';

export interface ItemCardProps {
  item: RetailItem;
  children?: ReactNode;
  onLike?: (item: RetailItem) => void;
}

let pulseAnimation = keyframes`
50% {
  transform: scale(1.3);
}
`;

let pulseAnimation2 = keyframes`
50% {
  transform: scale(0.7);
}
`;

export let ItemCard: React.FC<ItemCardProps> = (props) => {
  let { item, onLike } = props;

  return (
    <div
      css={css`
        max-width: 275px;
      `}
    >
      <div
        css={css`
          ${tw`relative`}
          width: 275px;
          height: 275px;

          :hover [data-id='button-group'] {
            opacity: 1;
          }
        `}
      >
        <img src={item.img} draggable={false} />
        <div
          css={css`
            ${tw`absolute flex justify-between`}
            top: 0.4rem;
            left: 0.4rem;
            right: 0.8rem;
          `}
        >
          <div
            css={css`
              ${tw`flex space-x-1 items-center`}
            `}
          >
            <Tag hot>-20%</Tag>
            <Tag>Распродажа</Tag>
            <Tag>Хит</Tag>
          </div>
          <div
            onClick={() => onLike?.(item)}
            css={css`
              ${tw`flex items-center cursor-pointer`}
            `}
          >
            <Heart
              size={20}
              css={
                item.liked
                  ? (theme) => css`
                      fill: ${theme.colors.bgTagHot};
                      stroke: ${theme.colors.bgTagHot};
                      animation: ${pulseAnimation} 0.3s;
                    `
                  : css`
                      animation: ${pulseAnimation2} 0.3s;
                    `
              }
            ></Heart>
          </div>
        </div>
        <div
          data-id="button-group"
          css={css`
            ${tw`absolute flex flex-col items-center space-y-2`}
            opacity: 0;
            bottom: 0.8rem;
            left: 0;
            right: 0;
            transition: opacity 0.2s 0.6s;
          `}
        >
          <Button
            variant="lifted"
            css={css`
              min-width: 80%;
            `}
          >
            Быстрый заказ
          </Button>
          <Button
            css={css`
              min-width: 80%;
            `}
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
      <div
        css={css`
          ${tw`space-y-2`}
        `}
      >
        <Title size="xs">{item.title}</Title>
        <div
          css={css`
            ${tw`flex space-x-2`}
          `}
        >
          <Price
            value={9900}
            css={css`
              ${tw`text-red-600 font-bold`}
            `}
          ></Price>
          <Price value={10900} previous></Price>
        </div>
        <div
          css={css`
            ${tw`text-gray-500 text-sm`}
          `}
        >
          Осталось мало
        </div>
      </div>
    </div>
  );
};
