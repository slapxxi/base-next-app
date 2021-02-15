import { css } from '@emotion/react';
import { NextPage } from 'next';
import React from 'react';
import tw from 'twin.macro';
import { Title } from '../components/Title';

let IndexPage: NextPage = () => {
  return (
    <div
      css={css`
        ${tw`p-4`}
      `}
    >
      <Title>Index Page</Title>
      <ImageHover></ImageHover>
    </div>
  );
};

function ImageHover() {
  return <svg viewBox="0 0 10 10"></svg>;
}

export default IndexPage;
