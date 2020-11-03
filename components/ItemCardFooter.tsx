import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { Heart, Share } from 'react-feather';
import tw from 'twin.macro';
import { AuctionLot, WithTheme } from '../lib/types';
import { Button } from './Button';
import { Dropdown } from './Dropdown';
import { SocialIconDribbble } from './SocialIconDribbble';
import { SocialIconFacebook } from './SocialIconFacebook';
import { SocialIconTwitter } from './SocialIconTwitter';

interface Props {
  item: AuctionLot;
}

export let ItemCardFooter: React.FC<Props> = () => {
  let shareButtonRef = useRef<HTMLButtonElement>(null);
  let [shareActive, setShareActive] = useState(false);

  return (
    <div
      css={css`
        ${tw`flex justify-between space-x-2`}
      `}
    >
      <Button
        variant="primary"
        css={css`
          ${tw`flex-1`}
        `}
      >
        Place Bet
      </Button>
      <Button variant="secondary">
        <Heart></Heart>
      </Button>
      <Button variant="accent" ref={shareButtonRef} onClick={() => setShareActive(!shareActive)}>
        <Share></Share>
      </Button>
      <Dropdown
        animate
        open={shareActive}
        anchorElement={shareButtonRef.current}
        onClose={() => setShareActive(false)}
      >
        <div
          css={css`
            ${tw`my-2 flex bg-black p-2 shadow-lg text-white space-x-2 rounded-xl`}
          `}
        >
          {/* @ts-ignore */}
          <ShareIcon as={SocialIconTwitter}></ShareIcon>
          {/* @ts-ignore */}
          <ShareIcon as={SocialIconFacebook}></ShareIcon>
          {/* @ts-ignore */}
          <ShareIcon as={SocialIconDribbble}></ShareIcon>
        </div>
      </Dropdown>
    </div>
  );
};

let ShareIcon = styled.div<WithTheme>`
  stroke: ${(props) => props.theme.colors.textDropdownActive};
`;
