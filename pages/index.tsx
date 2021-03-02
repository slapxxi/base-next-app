import { css } from '@emotion/react';
import { NextPage } from 'next';
import React from 'react';
import tw from 'twin.macro';

let IndexPage: NextPage = () => {
  return (
    <div
      css={css`
        ${tw`p-4 text-xl`}
      `}
    >
      Greetings
    </div>
  );
};

export default IndexPage;
