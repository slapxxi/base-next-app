import { css } from '@emotion/react';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import tw from 'twin.macro';
import { Squircle } from '../components/Squircle';

let IndexPage: NextPage = () => {
  let [active, setActive] = useState(false);
  let spring = useSpring({ x: active ? 1 : 0 });

  return (
    <div
      onClick={() => setActive((a) => !a)}
      css={css`
        ${tw`flex flex-col items-center justify-center h-full`}
      `}
    >
      <Squircle width={200} height={200}></Squircle>
    </div>
  );
};

export default IndexPage;
