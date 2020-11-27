import { css } from '@emotion/react';
import { NextPage } from 'next';
import React from 'react';
import tw from 'twin.macro';

let IndexPage: NextPage = () => {
  return (
    <div
      css={css`
        ${tw`p-2`}
      `}
    >
      <h1
        css={css`
          ${tw`m-0 flex`}
        `}
      >
        Title
      </h1>
    </div>
  );
};

export default IndexPage;
