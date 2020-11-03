import { css } from '@emotion/core';
import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { AuctionLot } from '../lib/types';
import { Price } from './Price';

interface Props {
  item: AuctionLot;
  footer?: React.ReactNode;
  className?: string;
}

export let ItemCard: React.FC<Props> = (props) => {
  let { item, footer, ...rest } = props;

  return (
    <div
      key={item.id}
      css={css`
        ${tw`flex flex-col space-y-4`}
      `}
      {...rest}
    >
      <div
        css={css`
          ${tw`relative`}
        `}
      >
        <Image
          src={item.img}
          unsized
          css={css`
            ${tw`w-full`}
          `}
        ></Image>

        <div
          css={css`
            ${tw`absolute bg-black rounded p-2 opacity-50 text-white font-bold text-sm`}
            top: 0;
            right: 0;
            transform: translate(-0.5rem, 0.5rem);
            backdrop-filter: blur(10px);
          `}
        >
          {item.category}
        </div>

        <div
          css={css`
            ${tw`font-bold text-lg my-4 text-xl`}
          `}
        >
          Lot № {item.id}
        </div>

        <div
          css={(theme) => css`
            ${tw`flex justify-between`}
            color: ${theme.colors.textItemTitle};
          `}
        >
          <div
            css={css`
              ${tw`flex flex-col space-y-2`}
            `}
          >
            <div>Author: {item.author}</div>
            <div>Name: {item.name}</div>
          </div>
          <div>
            Starting Price
            <div
              css={(theme) => css`
                ${tw`font-bold text-2xl text-right`}
                color: ${theme.colors.textItem};
              `}
            >
              <Price value={item.startingPrice}></Price>
            </div>
          </div>
        </div>
      </div>

      {footer}
    </div>
  );
};
