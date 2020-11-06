import { css } from '@emotion/core';
import { NextPage } from 'next';
import React from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Categories } from '../components/Categories';
import { ItemCard } from '../components/ItemCard';
import { ItemCardFooter } from '../components/ItemCardFooter';
import { SectionTitle } from '../components/SectionTitle';
import { Slider } from '../components/Slider';
import { getLatest } from '../lib/services/getLatest';
import { getRecommended } from '../lib/services/getRecommended';

let IndexPage: NextPage = () => {
  let { data = [] } = useQuery('latest', getLatest);
  let { data: recommended = [] } = useQuery('recommended', getRecommended);

  return (
    <div>
      <Slider></Slider>

      <Categories></Categories>

      <div
        css={css`
          ${tw`p-4`}
        `}
      >
        <SectionTitle>Latest Items</SectionTitle>

        <div
          css={css`
            ${tw`flex flex-col space-y-8 py-4`}
          `}
        >
          {data.map((item) => (
            <ItemCard key={item.id} item={item}></ItemCard>
          ))}
        </div>
      </div>

      <div
        css={(theme) => css`
          ${tw`p-2`}
          background: ${theme.colors.bgItem};
        `}
      >
        <SectionTitle
          css={css`
            ${tw`my-4`}
          `}
        >
          Recommended
        </SectionTitle>

        <div
          css={css`
            ${tw`space-y-4`}
          `}
        >
          {recommended.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              footer={<ItemCardFooter item={item}></ItemCardFooter>}
            ></ItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
