import { css } from '@emotion/react';
import { NextPage } from 'next';
import React from 'react';
import tw from 'twin.macro';
import { Title } from '../components/Title';

let IndexPage: NextPage = () => {
  return (
    <div
      css={css`
        ${tw`p-4 text-xl`}
      `}
    >
      <Title>Hola</Title>
      traveler
    </div>
  );
};

export default IndexPage;
