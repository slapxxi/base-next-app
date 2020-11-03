import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Title } from '../components/Title';
import { getLatest } from '../lib/services/getLatest';
import { WithTheme } from '../lib/types';
import { Price } from './Price';

export let Slider: React.FC = () => {
  let { data = [] } = useQuery('latest', getLatest);

  return (
    <div
      css={(theme) => css`
        ${tw`flex space-x-2 p-2`}
        overflow-x: scroll;
        scroll-snap-type: mandatory;
        scroll-snap-points-x: repeat(1040px);
        scroll-snap-type: x mandatory;
        color: ${theme.colors.textItemTitle};
      `}
    >
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <SliderItem>
            <Image src="/images/big-1.png" width={1040} height={540}></Image>
            <SlideTitle>Auction Number 79</SlideTitle>
            <div
              css={css`
                ${tw`flex flex-col space-y-2`}
              `}
            >
              <div
                css={css`
                  ${tw`text-black font-bold my-4`}
                `}
              >
                Lot Number 00{item.id}
              </div>
              <div>Author: {item.author}</div>
              <div>Name: {item.name}</div>
              <div>Canvas, paint, tempera 50x50cm</div>
            </div>
            <div>
              Starting Price
              <div
                css={css`
                  ${tw`absolute bg-black text-white p-2 rounded text-xl font-bold bg-opacity-75`}
                  top: 0.5rem;
                  right: 0.5rem;
                `}
              >
                <Price value={item.startingPrice}></Price>
              </div>
            </div>
          </SliderItem>
          <SliderItem>
            <Image src="/images/big-2.png" width={1040} height={540}></Image>
            <SlideTitle>Auction Number 79</SlideTitle>
            <div
              css={css`
                ${tw`flex flex-col space-y-2`}
              `}
            >
              <div
                css={css`
                  ${tw`text-black font-bold my-4`}
                `}
              >
                Lot Number 00{item.id}
              </div>
              <div>Author: {item.author}</div>
              <div>Name: {item.name}</div>
              <div>Canvas, paint, tempera 50x50cm</div>
            </div>
            <div>
              Starting Price
              <div
                css={css`
                  ${tw`absolute bg-black text-white p-2 rounded text-xl font-bold bg-opacity-75`}
                  top: 0.5rem;
                  right: 0.5rem;
                `}
              >
                <Price value={item.startingPrice}></Price>
              </div>
            </div>
          </SliderItem>
        </React.Fragment>
      ))}
    </div>
  );
};

let SliderItem = styled.div`
  ${tw`relative`}
  width: 80%;
  scroll-snap-align: center;
`;

let SlideTitle = styled(Title)<WithTheme>`
  ${tw`text-4xl mb-0`}
  color: ${(props) => props.theme.colors.textItem};
`;
