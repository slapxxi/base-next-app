import { css } from '@emotion/react';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import tw, { theme } from 'twin.macro';
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
      <Squircle
        width={200}
        height={200}
        radius={80}
        stroke="papayawhip"
        strokeWidth="4"
        fill={theme`colors.rose.400`}
        css={css`
          color: papayawhip;
        `}
      >
        <div
          css={css`
            ${tw`box-border flex items-center justify-center p-3`}
            height: 100%;
          `}
        >
          Greetings, <em>traveler!</em>
        </div>
      </Squircle>
    </div>
  );
};

export default IndexPage;
